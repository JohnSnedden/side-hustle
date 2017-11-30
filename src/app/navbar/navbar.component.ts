import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sideNav: Boolean;

  constructor(
    public auth: AuthService,
    private sidenavService: SidenavService
  ) { }

  ngOnInit() {
    // this.sidenavService.setSideNavState(closed);
  }

  setSideNavState() {
    this.sideNav = !this.sideNav;
    this.sidenavService.setSideNavState(this.sideNav);
  }

  signOut() {
    this.auth.signOut();
  }

}
