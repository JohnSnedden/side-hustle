import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {

  }

  signOut() {
    this.auth.signOut();
  }

  toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

}
