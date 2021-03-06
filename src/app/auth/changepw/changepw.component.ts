import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-changepw',
  templateUrl: './changepw.component.html',
  styleUrls: ['./changepw.component.css']
})
export class ChangepwComponent implements OnInit {

  // Not bound to multiple inputs, no object needed
  oldPassword: string;
  newPassword: string;

  constructor(
    private auth: AuthService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  changePassword() {
    this.auth.changePassword(this.oldPassword, this.newPassword);
    this.oldPassword = this.newPassword = '';
  }

  goBack(): void {
    this.location.back();
  }

}
