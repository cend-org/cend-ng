import { Component, OnInit } from '@angular/core';
import { aboutItems, loginItems, menus, registerItems } from './menu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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

  ngOnInit(): void {
    this.menus = menus;
    this.aboutItems = aboutItems;
    this.loginItems = loginItems;
    this.registerItems = registerItems;
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
