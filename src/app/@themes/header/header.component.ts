import { Component, OnInit } from '@angular/core';
import { aboutItems, loginItems, menus, registerItems } from './menu';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router){}
  showMobileMenu: boolean = false;
  showMobileAboutMenu: boolean = false;

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
}
