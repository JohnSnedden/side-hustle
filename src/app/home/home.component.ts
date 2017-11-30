import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';
// import { userInfo } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bool: boolean;

  constructor(
    private router: Router,
    public user: AuthService
  ) { }

  ngOnInit() {
    // check if there is a logged in user.
    if (!this.user.user) {
      console.log('bool this.user.user.email is false');
      // if no logged in user then redirect to /login
      this.router.navigate(['/login']);
    } else {
      console.log('bool this.user.user.email is true');
    }
  }

}
