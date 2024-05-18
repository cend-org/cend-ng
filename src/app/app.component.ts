import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { UserLoginReq } from './@core/entities/requests/user-login-req';
import { ThemesModule } from './@themes/themes.module';
import { ToastModule } from 'primeng/toast';
import { PagesModule } from './pages/pages.module';
import { environment } from './environments/environment';
import { ApolloModule } from 'apollo-angular';
import { LoadingService } from './@core/services/loading.service';
import { RouteMonitorService } from './@core/services/route-monitor.service';
import { PermissionDirectiveModule } from './@core/directives/permission-directives.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ 
    CommonModule, 
    RouterOutlet, 
    PermissionDirectiveModule,
    ButtonModule, 
    ChipsModule, 
    DialogModule, 
    HttpClientModule,
    ThemesModule,
    ToastModule,
    PagesModule,
    ApolloModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = environment.app_name;
  loading: boolean = true;
  visible: boolean = false;
  loginReq: UserLoginReq = new UserLoginReq();
    constructor( public loadingService: LoadingService, private routeMonitorService: RouteMonitorService){
      //this.loadingService.emitChange(true)
    }

    ngOnInit(): void {
     
    }

}
