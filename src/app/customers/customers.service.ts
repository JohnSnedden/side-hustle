import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { SnackbarService } from '../shared/snackbar.service';

@Injectable()
export class CustomersService {

  constructor(
    private http: Http,
    private snackbarService: SnackbarService,
    public user: AuthService
  ) { }

  getUserToken() {
    return this.user.user.token;
  }

  getAllCustomers() {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.get(environment.apiServer + `/customers`, config);
  }

  getOneCustomer(customerId) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.get(environment.apiServer + `/customers/${customerId}`, config);
  }

  deleteCustomer(customer) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.delete(environment.apiServer + `/customers/${customer.id}`, config);
  }

  saveCustomer(customer) {
    const newCustomer = {
      customer
    };
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.post(environment.apiServer + `/customers`, newCustomer, config);
  }

  updateCustomer(customer) {
    const updCustomer = {
      customer
    };
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.put(environment.apiServer + `/customers/${updCustomer.customer.id}`, updCustomer, config);
  }

}
