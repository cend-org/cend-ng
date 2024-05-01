import { Component, OnInit } from '@angular/core';
import { aboutItems, loginItems, menus, registerItems } from './menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  showMobileMenu: boolean = false;
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
}
