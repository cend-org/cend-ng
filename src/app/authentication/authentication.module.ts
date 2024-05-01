import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OtpComponent } from './otp/otp.component';
import { PasswordComponent } from './password/password.component';
import { AuthenticationRoutingModule } from './authentication.routes';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    PasswordComponent,
    
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    AuthenticationRoutingModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    ImageModule
  ]
})
export class AuthenticationModule { }
