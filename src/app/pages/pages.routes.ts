import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing/landing.component";

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
                component: LandingComponent
              },
              {
                path: 'about',
                loadChildren: () => import('../pages/about/about.module')
                .then(m => m.AboutModule),
              },
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
