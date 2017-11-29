import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // New user object. Used to fix template binding
  newUser = <any>{};

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  signUp() {
    this.auth.signUp(this.newUser.email, this.newUser.password, this.newUser.password_confirmation);
    this.newUser.email = this.newUser.password = this.newUser.password_confirmation = '';
  }

}
