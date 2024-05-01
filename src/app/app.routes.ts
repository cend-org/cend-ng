import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pages',
         loadChildren: () => import('../app/pages/pages.module')
           .then(m => m.PagesModule),
      },
      {
        path: 'authentication',
        loadChildren: () => import('../app/authentication/authentication.module')
           .then(m => m.AuthenticationModule),
      },
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      { path: '**', redirectTo: 'pages' },
];
