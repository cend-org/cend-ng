import { Component, OnInit, ViewChild } from '@angular/core';
import { aboutItems, loginItems, menus, navMenuButtons, registerItems } from './menu';
import { MenuItem, MessageService } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingService } from '../../@core/services/loading.service';
import { AuthService } from '../../@core/services/auth.service';
import { ForAuthentifiedDirective } from '../../@core/directives/for-authentified.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  constructor(private router: Router, public loadingService: LoadingService, private authService: AuthService, private messageService: MessageService,){}
  showMobileMenu: boolean = false;
  showMobileAboutMenu: boolean = false;
  navButtons: any = navMenuButtons;
  @ViewChild(ForAuthentifiedDirective) forAuthentifiedDirective: ForAuthentifiedDirective | undefined;

  menus: MenuItem[] | undefined;
  aboutItems: MenuItem[] | undefined;
  loginItems: MenuItem[] | undefined;
  registerItems: MenuItem[] | undefined;
  landingNavigationDisabled: boolean = false;
  isDashboard:boolean = false;

  ngOnInit(): void {
    this.menus = menus;
    this.aboutItems = aboutItems;
    this.loginItems = loginItems;
    this.registerItems = registerItems;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.landingNavigationDisabled = event.url.startsWith("/authentication")? true: false;
        this.isDashboard = event.url.startsWith('/pages/dashboard')? true : false;
      }
    });
  }
  onClickMobileMenu(){
    this.showMobileMenu = !this.showMobileMenu;
  }

  onClickMobileAbourMenu(){
    this.showMobileAboutMenu = !this.showMobileAboutMenu;
  }
  onClickLinks(link:string){
    if(link){
      this.router.navigateByUrl(link);
      this.showMobileMenu = false;
      this.showMobileAboutMenu = false;
    }
  }
  onClickCend(){
    this.router.navigateByUrl('/dashboard');
  }

  onClickLogOut(){
    this.loadingService.emitChange(true);
    this.authService.LogOut();
    this.messageService.add({ severity: 'success', summary: 'Déconnexion', detail: "Déconnexion avec succès." });

    setTimeout(() => {
      
      this.router.navigateByUrl('/pages/landing');
      this.loadingService.emitChange(false);
    }, 1000);
   
     
  }
  IsAuthentified(): boolean{
    let hide = this.authService.IsAuthentified();
    return hide;
  }

  IsAuthenticating(): boolean{
    let hide = this.router.url.startsWith("/authentication/register")? true : false;
    return hide;
  }
}
