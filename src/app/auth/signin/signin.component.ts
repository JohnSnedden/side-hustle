import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);

  // hide = true;

  // User object. Used to fix template binding
  user = <any>{};

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.auth.signIn(this.user.email, this.user.password);
    console.log('in login.comp signIn, this.user is ', this.user);
    // console.log('in signIn, token is ', this.getUserToken());
    this.user.email = this.user.password = '';
  }

}
