import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { UserLoginReq } from './@core/entities/requests/user-login-req';
import { ThemesModule } from './@themes/themes.module';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { PagesModule } from './pages/pages.module';
import { environment } from './environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule, 
    RouterOutlet, 
    ButtonModule, 
    ChipsModule, 
    DialogModule, 
    HttpClientModule,
    ThemesModule,
    ToastModule,
    PagesModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = environment.app_name;
  visible: boolean = false;
  loginReq: UserLoginReq = new UserLoginReq();
    constructor(
      private messageService: MessageService
    ){}
  ngOnInit(): void {
    
  }
}
