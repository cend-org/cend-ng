import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Injectable()
export class LandingGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (this.auth.IsAuthentified()) {
      this.router.navigateByUrl("/pages/dashboard");
      return false;
    }
    return true;
  }
}