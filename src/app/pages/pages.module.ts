import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routes';
import { AboutModule } from './about/about.module';
import { LandingComponent } from './landing/landing.component';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    PagesComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AboutModule,
    ImageModule
  ]
})
export class PagesModule { }
