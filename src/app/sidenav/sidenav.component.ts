import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  sidenavState: any = false;
  sideNav: Boolean;

    constructor(
       public mediator: SidenavService,
       private sidenavService: SidenavService
    ) { }

    ngOnInit() {

      // this.sidenavState = 'closed'

      // this.sidenavService.setSideNavState(closed);

      this.sidenavState = this.mediator.getSideNavState();
      console.log(this.sidenavState);

    }

    setSideNavState() {
      this.sideNav = !this.sideNav;
      this.sidenavService.setSideNavState(this.sideNav);
    }
}
