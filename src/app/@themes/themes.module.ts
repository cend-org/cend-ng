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
import { StudentAboutSkeletonComponent } from './skeletons/register/student/student-about-skeleton/student-about-skeleton.component';
import { LoadingComponent } from './loading/loading.component';
import { StudentEducationLevelSkeletonComponent } from './skeletons/register/student/student-education-level-skeleton/student-education-level-skeleton.component';
import { StudentSubjectSkeletonComponent } from './skeletons/register/student/student-subject-skeleton/student-subject-skeleton.component';
import { StudentCourseTypeSkeletonComponent } from './skeletons/register/student/student-course-type-skeleton/student-course-type-skeleton.component';
import { ParentRegisterEmailSkeletonComponent } from './skeletons/register/parent/parent-register-email-skeleton/parent-register-email-skeleton.component';
import { ParentPasswordSkeletonComponent } from './skeletons/register/parent/parent-password-skeleton/parent-password-skeleton.component';
import { ParentAboutSkeletonComponent } from './skeletons/register/parent/parent-about-skeleton/parent-about-skeleton.component';
import { ParentChildSkeletonComponent } from './skeletons/register/parent/parent-child-skeleton/parent-child-skeleton.component';
import { ParentEducationLevelSkeletonComponent } from './skeletons/register/parent/parent-education-level-skeleton/parent-education-level-skeleton.component';
import { ParentSubjectSkeletonComponent } from './skeletons/register/parent/parent-subject-skeleton/parent-subject-skeleton.component';
import { ParentCourseTypeSkeletonComponent } from './skeletons/register/parent/parent-course-type-skeleton/parent-course-type-skeleton.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginSkeletonComponent,
    StudentRegisterEmailSkeletonComponent,
    StudentRegisterPasswordSkeletonComponent,
    StudentRegisterOtpSkeletonComponent,
    LandingSkeletonComponent,
    StudentPasswordSkeletonComponent,
    StudentAboutSkeletonComponent,
    LoadingComponent,
    StudentEducationLevelSkeletonComponent,
    StudentSubjectSkeletonComponent,
    StudentCourseTypeSkeletonComponent,
    ParentRegisterEmailSkeletonComponent,
    ParentPasswordSkeletonComponent,
    ParentAboutSkeletonComponent,
    ParentChildSkeletonComponent,
    ParentEducationLevelSkeletonComponent,
    ParentSubjectSkeletonComponent,
    ParentCourseTypeSkeletonComponent
  ],
  exports: [
    HeaderComponent,
    LoginSkeletonComponent,
    StudentRegisterEmailSkeletonComponent,
    StudentRegisterPasswordSkeletonComponent,
    LandingSkeletonComponent,
    StudentPasswordSkeletonComponent,
    StudentAboutSkeletonComponent,
    StudentEducationLevelSkeletonComponent,
    StudentSubjectSkeletonComponent,
    StudentCourseTypeSkeletonComponent,
    ParentRegisterEmailSkeletonComponent,
    ParentPasswordSkeletonComponent,
    ParentAboutSkeletonComponent,
    ParentChildSkeletonComponent,
    ParentEducationLevelSkeletonComponent,
    ParentSubjectSkeletonComponent,
    ParentCourseTypeSkeletonComponent

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
