import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepwComponent } from './changepw/changepw.component';

const authRoutes: Routes = [
//   {
//       path: '',
//       component: AuthComponent,
//       children: [ // create the sub sections (children) for this route
//           {
//               path: '',
//               component: SigninComponent
//           },
//           {
//               path: 'login',
//               component: SigninComponent
//           },
//           {
//               path: 'signin',
//               component: SigninComponent
//           },
//           {
//               path: 'signup',
//               component: SignupComponent
//           },
//           {
//               path: 'changepw',
//               component: ChangepwComponent
//           },
//           {
//               path: 'signout',
//               component: SignoutComponent
//           }
//       ]
//   }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AuthRoutingModule { }
