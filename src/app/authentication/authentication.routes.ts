import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { AuthenticationComponent } from "./authentication.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full',
              },
              {
                path: 'login',
                loadChildren: () => import('../authentication/login/login.module')
                .then(m => m.LoginModule),
              },
              {
                path: 'register',
                loadChildren: () => import('../authentication/register/register.module')
                .then(m => m.RegisterModule),
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthenticationRoutingModule { }