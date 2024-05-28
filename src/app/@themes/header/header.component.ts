import { Component, OnInit, ViewChild } from '@angular/core';
import { aboutItems, loginItems, menus, navMenuButtons, registerItems } from './menu';
import { MenuItem, MessageService } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { LoadingService } from '../../@core/services/loading.service';
import { AuthService } from '../../@core/services/auth.service';
import { ForAuthentifiedDirective } from '../../@core/directives/for-authentified.directive';
import { LanguageData } from '../../@core/datas/language-data';
import { environment } from '../../environments/environment';
import { LocalStorageService } from '../../@core/services/local-storage.service';
import { LangConfigService } from '../../@core/services/lang-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  private clickCount = 0;
  private singleClickTimer: any;

  constructor(private router: Router, public loadingService: LoadingService, private authService: AuthService, private messageService: MessageService, private localStorageService: LocalStorageService, private langConfigService: LangConfigService){}
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
  desktopMobileAboutMenu:boolean = false;
  languagesMenu: boolean = false;
  selectedLanguage: any = {}
  languages = LanguageData;
toggleLanguageMenu(){
  this.languagesMenu = !this.languagesMenu;
  this.desktopMobileAboutMenu = false;
  this.showMobileAboutMenu = false;
}

onChooseLanguage(lang:any){ 
  this.selectedLanguage = lang;
  this.localStorageService.save(`${environment.cend_default_lang_id}_lang`, lang.code);
  this.langConfigService.configure();


}
  ngOnInit(): void {
    this.selectedLanguage = this.languages[0];
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
  onClickLinks(link:string, _fragment: string | undefined){
    if(link){
      this.router.navigate([link], {fragment: _fragment});
      this.showMobileMenu = false;
      this.showMobileAboutMenu = false;
    }
  }
  onClickCend(){
    if(this.authService.IsAuthentified()){
      this.router.navigateByUrl('/dashboard');
    }else{
      this.router.navigateByUrl('/pages/landing');
    }
    
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




  onClickAboutButton(aboutMenu:any, $event:any){

    //this.desktopMobileAboutMenu = !this.desktopMobileAboutMenu;
    this.clickCount++; 
  if (this.clickCount == 1) {
    this.singleClickTimer = setTimeout(() => {
      this.desktopMobileAboutMenu = !this.desktopMobileAboutMenu;
      aboutMenu.toggle($event);
      this.clickCount = 0;
  
    }, 300); // Délai pour distinguer un double clic
  } else if (this.clickCount === 2) {
    clearTimeout(this.singleClickTimer);
    this.router.navigateByUrl("/pages/about/about-us");
    //this.navigateToAboutPage();
    this.clickCount = 0;
    this.desktopMobileAboutMenu = false;
  }

  }
 
}

