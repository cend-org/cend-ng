import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../@core/services/auth.service';
import { UserLoginReq } from '../../../@core/entities/requests/user-login-req';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo, gql } from 'apollo-angular';
import { LOGIN, REGISTRATION } from '../../../services/graphs/auth.graph';
import { RegistrationWithInforeq } from '../../../@core/entities/requests/registration-req';
import { LanguageEnum } from '../../../@core/enumerations/language.enum';
import { SexEnum } from '../../../@core/enumerations/sex.enum';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrl: './main-login.component.scss'
})
export class MainLoginComponent  implements OnInit{
  constructor(
    private apolloService: Apollo,
    private messageService: MessageService,
    private toastr: ToastrService
  ){}
  loading: boolean = false;
  userLoginReq = new UserLoginReq();
  registrationWithInforeq = new RegistrationWithInforeq();

  onLoginButtonClicked(){
    
    // this.loading = true;
    // this.userLoginReq.email = "rawalci@gmail.com";
    // this.userLoginReq.password = "valciokely";

    // this.registrationWithInforeq.BirthDate = new Date();
    // this.registrationWithInforeq.Email = "nao@email.com";
    // this.registrationWithInforeq.FamilyName = "Julius";
    // this.registrationWithInforeq.Lang = LanguageEnum.ENGLISH;
    // this.registrationWithInforeq.Name = "Nao";
    // this.registrationWithInforeq.NickName = "naojulius";
    // this.registrationWithInforeq.Sex = SexEnum.FEMALE;

    // this.apolloService.mutate({
    //   mutation: LOGIN.EMAIL,
    //   variables: {
    //     email: this.userLoginReq.email,
    //     password: this.userLoginReq.password
    //   }
    // }).subscribe({
    //   next: (response)=>{
    //     this.loading = false
    //   },
    //   error: (e)=>{
    //     this.loading = false
    //   }
    // });

    // this.apolloService.mutate({
    //   mutation: REGISTRATION.WITH_INFO,
    //   variables: {
    //     Name: this.registrationWithInforeq.Name,
    //     FamilyName: this.registrationWithInforeq.FamilyName,
    //     NickName: this.registrationWithInforeq.NickName,
    //     Email: this.registrationWithInforeq.Email,
    //     BirthDate: this.registrationWithInforeq.BirthDate,
    //     Sex: this.registrationWithInforeq.Sex,
    //     Lang: this.registrationWithInforeq.Lang,
    //   }
    // }).subscribe(({ data, loading, errors }) => {
    //   //this.loading = loading;
    //   console.log(data);
    // });
  }
  ngOnInit(): void {
    console.log(new Date())
  }
  login(){
    this.loading = true;
    this.apolloService.mutate({
      mutation: LOGIN.EMAIL,
      variables: {
        email: this.userLoginReq.email,
        password: this.userLoginReq.password
      }
    }).subscribe({
      next: (response)=>{
        this.loading = false
      },
      error: (e)=>{
        this.toastr.error('', e.message);
        this.loading = false;
      }
    });
  }
}
