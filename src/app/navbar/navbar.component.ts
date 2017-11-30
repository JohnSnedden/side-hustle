import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';

// import { MaterialModule } from '../shared/material.module';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') public myNav: MatSidenav;

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {
    // check if there is a logged in user.
    if (!this.auth.user) {
      // if no logged in user then collapse the sidenav
      this.myNav.close();
    }
  }

  toggleSidenav() {
    this.myNav.toggle();
  }

  signOut() {
    this.auth.signOut();
  }

}
