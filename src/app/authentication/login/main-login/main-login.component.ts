import { Component, OnInit } from '@angular/core';
import { UserLoginReq } from '../../../@core/entities/requests/user-login-req';
import { Apollo } from 'apollo-angular';
import { LOGIN } from '../../../services/graphs/auth.graph';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../../@core/services/validation.service';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../../@core/services/local-storage.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.scss'
})
export class MainLoginComponent implements OnInit {
  constructor(
    private apolloService: Apollo,
    private messageService: MessageService,
    private toastr: ToastrService,
    private validationService: ValidationService,
    private locaStorageService: LocalStorageService
  ) { }
  loading: boolean = false;
  userLoginReq = new UserLoginReq();
  registrationWithInforeq = new RegistrationWithInforeq();
  ngOnInit(): void {

  }
  login() {
    if (!this.validationService.checkEmail(this.userLoginReq.email)) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier vôtre email!' });
      return;
    }
    if (!this.userLoginReq.password) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier vôtre mots de passe!' });
      return;
    }
    this.loading = true;
    this.apolloService.mutate({
      mutation: LOGIN.EMAIL,
      variables: {
        email: this.userLoginReq.email,
        password: this.userLoginReq.password
      }
    }).subscribe({
      next: (response) => {
       let resp: any = response.data;
       if (resp) {
         this.locaStorageService.save(`${environment.cend_default_lang_id}_tkn`, resp["registerWithEmail"]);
      this.messageService.add({ severity: 'success', summary: 'OK!', detail: 'Connecte avec succes!' });
  

       };
       this.loading = false;
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loading = false;
      }
    });
  }
}
