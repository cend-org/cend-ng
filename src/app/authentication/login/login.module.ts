import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginStudentComponent } from './login-student/login-student.component';
import { LoginParentComponent } from './login-parent/login-parent.component';
import { LoginTutorComponent } from './login-tutor/login-tutor.component';
import { LoginProfesorComponent } from './login-profesor/login-profesor.component';
import { LoginRoutingModule } from './login.routes';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { MainLoginComponent } from './main-login/main-login.component';
import { ThemesModule } from '../../@themes/themes.module';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginStudentComponent,
    LoginParentComponent,
    LoginTutorComponent,
    LoginProfesorComponent,
    MainLoginComponent
  ],
  imports: [
    CommonModule,
   LoginRoutingModule,
   InputTextModule,
   ButtonModule,
   DividerModule,
   ImageModule,
   ThemesModule,
   ToastModule,
   MessagesModule,
   FormsModule,
  ], 
})
export class LoginModule { }
