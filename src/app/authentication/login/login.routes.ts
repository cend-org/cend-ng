import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { LoginStudentComponent } from "./login-student/login-student.component";
import { LoginParentComponent } from "./login-parent/login-parent.component";
import { LoginTutorComponent } from "./login-tutor/login-tutor.component";
import { LoginProfesorComponent } from "./login-profesor/login-profesor.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        children: [
              {
                path: 'student',
                component: LoginStudentComponent
              },
              {
                path: 'parent',
                component: LoginParentComponent
              },
              {
                path: 'tutor',
                component: LoginTutorComponent
              },
              {
                path: 'professor',
                component: LoginProfesorComponent
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }