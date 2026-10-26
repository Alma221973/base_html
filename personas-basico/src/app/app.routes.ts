<<<<<<< HEAD
import { Routes } from '@angular/router';

export const routes: Routes = [];
=======

import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
]
>>>>>>> c651d7bfa34c8b921a8df99d4dfc4375e697e0f8
