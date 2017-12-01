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

  // User object. Used to fix template binding
  user = <any>{};

  constructor(
    public auth: AuthService,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signIn(this.user.email, this.user.password);
    this.user.email = this.user.password = '';
  }

}
