import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    public user: AuthService
  ) { }

  ngOnInit() {
    // check if there is a logged in user.
    if (!this.user.user) {
      // if no logged in user then redirect to /login
      this.router.navigate(['/login']);
    }
  }

}
