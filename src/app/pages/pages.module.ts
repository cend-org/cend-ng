import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routes';
import { AboutModule } from './about/about.module';
import { LandingComponent } from './landing/landing.component';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemesModule } from '../@themes/themes.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    PagesComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PagesRoutingModule,
    AboutModule,
    ImageModule,
    DividerModule, 
    ThemesModule,
    SkeletonModule,
    DialogModule,
    ConfirmDialogModule,
    DashboardModule
  ],
})
export class PagesModule { }
