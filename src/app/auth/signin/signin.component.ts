import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { SidenavService } from '../../sidenav/sidenav.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  sideNav: Boolean;

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // hide = true;

  // User object. Used to fix template binding
  user = <any>{};

  constructor(
    public auth: AuthService,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    // this.sidenavService.setSideNavState(closed);
    // console.log('in signin.c ngOnInit sidenavService.sideNav = ', this.sidenavService.sideNav);
    // console.log('in signin.c ngOnInit sidenavService.sideNavUpdated = ', this.sidenavService.sideNavUpdated);
  }

  signIn() {
    this.auth.signIn(this.user.email, this.user.password);
    // console.log('in login.comp signIn, this.user is ', this.user);
    this.user.email = this.user.password = '';
    // console.log('in signin.c signIn sidenavService.sideNav = ', this.sidenavService.sideNav);
    // console.log('in signin.c signIn sidenavService.sideNavUpdated = ', this.sidenavService.sideNavUpdated);
  }

}
