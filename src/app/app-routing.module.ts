import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChangepwComponent } from './auth/changepw/changepw.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
      path: 'login',
      component: SigninComponent
  },
  {
      path: 'signin',
      component: SigninComponent
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
      path: 'changepw',
      component: ChangepwComponent
  },
  {
      path: 'signout',
      component: SignoutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
