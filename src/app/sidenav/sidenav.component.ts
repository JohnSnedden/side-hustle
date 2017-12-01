import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})

export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(
      private sidenavService: SidenavService
  ) { }

  ngOnInit() {

    // store sidenav to service
    this.sidenavService
    .setSidenav(this.sidenav);
    }

}
