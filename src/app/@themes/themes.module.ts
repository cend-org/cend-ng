import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { HeaderComponent } from './header/header.component';
import { MenubarModule } from 'primeng/menubar';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ], 
  imports: [
    CommonModule, 
    ToastModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    TieredMenuModule
  ]
})
export class ThemesModule { }
