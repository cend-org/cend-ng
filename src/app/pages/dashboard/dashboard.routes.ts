import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard.component";
import { DashboardHomeComponent } from "./dashboard-home/dashboard-home.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
            // canActivate: [UserGuardService],
          },
          {
            path: 'home',
            component: DashboardHomeComponent
          },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
