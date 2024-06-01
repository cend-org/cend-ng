import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing/landing.component";
import { AuthGuardService } from "../@core/services/guard/auth.guard";
import { LandingGuardService } from "../@core/services/guard/landing.guard";

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'landing',
                pathMatch: 'full',
                // canActivate: [UserGuardService],
              },
              {
                path: 'landing',
                component: LandingComponent, 
                canActivate: [LandingGuardService],
              },
              {
                path: 'about',
                loadChildren: () => import('../pages/about/about.module')
                .then(m => m.AboutModule),
              },
              {
                canActivate: [AuthGuardService],
                path: 'dashboard',
                loadChildren: () => import('../pages/dashboard/dashboard.module')
                .then(m => m.DashboardModule),
              },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
