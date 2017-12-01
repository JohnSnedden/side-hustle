import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { environment } from '../../environments/environment';
import { SnackbarService } from '../shared/snackbar.service';
import { SidenavService } from '../sidenav/sidenav.service';

@Injectable()
export class AuthService {

  user: any;
  sideNav: Boolean;

  constructor(
    private http: Http,
    private router: Router,
    private location: Location,
    private snackbarService: SnackbarService,
    private sidenavService: SidenavService,
  ) { }

  getUserToken() {
    return this.user.token;
  }

  getUser() {
    return this.user;
  }

  // toggle sidenav
  toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

  // open sidenav
  openSidenav() {
    this.sidenavService
      .open()
      .then(() => { });
  }

  // close sidenav
  closeSidenav() {
    this.sidenavService
      .close()
      .then(() => { });
  }

  signUp(email: string, password: string, password_confirmation: string) {
    // Create the credentials object.
    const credentials = {
      'credentials': {
        'email': email,
        'password': password,
        'password_confirmation': password_confirmation
      }
    };

    // Make the post request. environment.apiServer contains the local server address http://localhost:4741
    this.http.post(environment.apiServer + '/sign-up', credentials)
      .subscribe(
        response => {
          // Send the existing credentials back to the server to log in the new user
          this.signIn(credentials.credentials.email, credentials.credentials.password);
        },
        err => {
          console.log(err);
          this.snackbarService.showSnackBar('Sign up error');
        }
      );
  }

  signIn(email: string, password: string) {
    // Create the credentials object.
    const credentials = {
      'credentials': {
        'email': email,
        'password': password
      }
    };

    // Make the post request. environment.apiServer contains the local server address http://localhost:4741
    this.http.post(environment.apiServer + '/sign-in', credentials)
      .subscribe(
        // Save the response to user
        response => {
          this.user = JSON.parse(response['_body']).user;
          this.snackbarService.showSnackBar('Sign in successful!');
          this.router.navigate(['/home']);
          // this.sidenavComponent.showSidenav = true;
          this.sidenavService.open();
        },
        err => {
          console.log(err);
          this.snackbarService.showSnackBar('Sign in error');
        }
      );
      // console.log('in auth.services signIn ', this.user);
  }

  changePassword(oldPassword: string, newPassword: string) {
    // Create the passwords data object to send.
    const passwords = {
      'passwords': {
        'old': oldPassword,
        'new': newPassword
      }
    };

    // Create the configuration object to be able to store the Headers > Authentication
    const config = {};

    // Set the headers key
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};

    // Make the patch request to URL, add the password data and token from Config.
    this.http.patch(environment.apiServer + '/change-password/' + this.user.id, passwords, config)
      .subscribe(
        data => {
          console.log('Success');
          this.snackbarService.showSnackBar('Password changed!');
          this.location.back();
        },
        err => {
          console.log(err);
          this.snackbarService.showSnackBar('Error changing password');
        }
      );
  }

  signOut() {
    // Create the configuration object to be able to store the Headers > Authentication
    const config = {};

    // Set the headers key
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    // Make the delete request to URL, and add the token from Config.
    this.http.delete(environment.apiServer + '/sign-out/' + this.user.id, config)
      .subscribe(
        // Remove the logged in user.
        data => {
          this.user = null;
          this.snackbarService.showSnackBar('Sign out successful');
          this.router.navigate(['/login']);
          this.sidenavService.close();
        },
        err => {
          console.log(err);
          this.snackbarService.showSnackBar('Sign out error');
        }
      );
  }

}
