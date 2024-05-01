import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { RegisterStudentComponent } from "./register-student/register-student.component";
import { RegisterParentComponent } from "./register-parent/register-parent.component";
import { RegisterTutorComponent } from "./register-tutor/register-tutor.component";
import { RegisterProfesorComponent } from "./register-profesor/register-profesor.component";
import { RegisterComponent } from "./register.component";

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent,
        children: [
              {
                path: 'student',
                component: RegisterStudentComponent
              },
              {
                path: 'parent',
                component: RegisterParentComponent
              },
              {
                path: 'tutor',
                component: RegisterTutorComponent
              },
              {
                path: 'professor',
                component: RegisterProfesorComponent
              },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RegisterRoutingModule { }