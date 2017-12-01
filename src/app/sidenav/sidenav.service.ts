import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class SidenavService {

  private sidenav: MatSidenav;

  //  Setter for sidenav.
  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  constructor() { }

  // Open this sidenav
  public open() {
    return this.sidenav.open();
  }

  // Close this sidenav
  public close() {
    return this.sidenav.close();
  }

  // Toggle this sidenav
  public toggle(isOpen?: boolean) {
    return this.sidenav.toggle(isOpen);
  }

}
