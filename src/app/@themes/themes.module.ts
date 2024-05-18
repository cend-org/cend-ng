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
import { LandingSkeletonComponent } from './skeletons/landing/landing-skeleton/landing-skeleton.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingComponent } from './loading/loading.component';

import { PermissionDirectiveModule } from '../@core/directives/permission-directives.module';
import { StepsModule } from 'primeng/steps';
@NgModule({
  declarations: [
    HeaderComponent,
    LoginSkeletonComponent,
    LandingSkeletonComponent,
    LoadingComponent,

  ],
  exports: [
    HeaderComponent,
    LoginSkeletonComponent,
    LandingSkeletonComponent,
    LoadingComponent


  ], 
  imports: [
    CommonModule, 
    ToastModule,
    PermissionDirectiveModule,
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
    TranslateModule,
    StepsModule
  ],
  providers:[
    ConfirmationService, 
    MessageService
  ]
})
export class ThemesModule { }
