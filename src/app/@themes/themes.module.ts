import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { LoginSkeletonComponent } from './skeletons/login-skeleton/login-skeleton.component';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StudentRegisterEmailSkeletonComponent } from './skeletons/register/student/student-register-email-skeleton/student-register-email-skeleton.component';
import { StudentRegisterPasswordSkeletonComponent } from './skeletons/register/student/student-register-password-skeleton/student-register-password-skeleton.component';
import { StudentRegisterOtpSkeletonComponent } from './skeletons/register/student/student-register-otp-skeleton/student-register-otp-skeleton.component';
import { LandingSkeletonComponent } from './skeletons/landing/landing-skeleton/landing-skeleton.component';
import { TranslateModule } from '@ngx-translate/core';
import { StudentPasswordSkeletonComponent } from './skeletons/register/student/student-password-skeleton/student-password-skeleton.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginSkeletonComponent,
    StudentRegisterEmailSkeletonComponent,
    StudentRegisterPasswordSkeletonComponent,
    StudentRegisterOtpSkeletonComponent,
    LandingSkeletonComponent,
    StudentPasswordSkeletonComponent
  ],
  exports: [
    HeaderComponent,
    LoginSkeletonComponent,
    StudentRegisterEmailSkeletonComponent,
    StudentRegisterPasswordSkeletonComponent,
    LandingSkeletonComponent,
    StudentPasswordSkeletonComponent
  ], 
  imports: [
    CommonModule, 
    ToastModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    TieredMenuModule,
    InputTextModule,
    DividerModule,
    ImageModule,
    SkeletonModule,
    DialogModule,
    ConfirmDialogModule,
    TranslateModule
  ],
  providers:[
    ConfirmationService, 
    MessageService
  ]
})
export class ThemesModule { }
