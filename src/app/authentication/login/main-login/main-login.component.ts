import { Component, OnInit } from '@angular/core';
import { UserLoginReq } from '../../../@core/entities/requests/user-login-req';
import { Apollo } from 'apollo-angular';
import { LOGIN } from '../../../services/graphs/auth.graph';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { MessageService } from 'primeng/api';
import { ValidationService } from '../../../@core/services/validation.service';
import { environment } from '../../../environments/environment';
import { LocalStorageService } from '../../../@core/services/local-storage.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../../@core/services/loading.service';
@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.scss'
})
export class MainLoginComponent implements OnInit {
  constructor(
    private apolloService: Apollo,
    private messageService: MessageService,
    private validationService: ValidationService,
    private locaStorageService: LocalStorageService, 
    private router: Router,
    private loadingService: LoadingService
  ) { }

  userLoginReq = new UserLoginReq();
  registrationWithInforeq = new RegistrationWithInforeq();
  ngOnInit(): void {

  }
  login() {
    if (!this.validationService.checkEmail(this.userLoginReq.email)) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre email!' });
      return;
    }
    if (!this.userLoginReq.password) {
      this.messageService.add({ severity: 'warn', summary: 'Erreur de validation!', detail: 'Veuillez vérifier votre mots de passe!' });
      return;
    }

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
        this.router.navigateByUrl("/pages/dashboard")

       };
       this.loadingService.emitChange(false);
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur lors du traitement!', detail: e.message });
        this.loadingService.emitChange(false);
      }
    });
  }
}
