import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForAuthentifiedDirective } from './for-authentified.directive';
import { AuthenticatingDirective } from './authenticating.directive';
import { ForAuthenticationProcessDirective } from './for-authentication-process.directive';

@NgModule({
  declarations: [
    ForAuthentifiedDirective, 
    AuthenticatingDirective,
    ForAuthenticationProcessDirective
  ],
  exports: [
    ForAuthentifiedDirective, 
    AuthenticatingDirective,
    ForAuthenticationProcessDirective
  ],
  imports: [
    CommonModule,

  ]
})
export class PermissionDirectiveModule { }
