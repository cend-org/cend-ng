import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { RegisterStudentComponent } from './register-student/register-student.component';
import { RegisterParentComponent } from './register-parent/register-parent.component';
import { RegisterTutorComponent } from './register-tutor/register-tutor.component';
import { RegisterProfesorComponent } from './register-profesor/register-profesor.component';
import { RegisterRoutingModule } from './register.routes';
import { InputOtpModule } from 'primeng/inputotp';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ThemesModule } from '../../@themes/themes.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApolloInterceptor } from '../../@core/interceptors/graph.interceptor';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AvatarModule } from 'primeng/avatar';
@NgModule({
  declarations: [
    RegisterStudentComponent,
    RegisterParentComponent,
    RegisterTutorComponent,
    RegisterProfesorComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
   InputTextModule,
   ButtonModule,
   DividerModule,
   ImageModule,
   InputOtpModule,
   PasswordModule,
   CalendarModule,
   DropdownModule,
   FormsModule,
   RadioButtonModule,
   ScrollPanelModule,
   FileUploadModule,
   ToastModule,
   InputTextareaModule,
   ThemesModule,
   SelectButtonModule,
   AvatarModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: ApolloInterceptor, multi: true },
  ]
})
export class RegisterModule { }
