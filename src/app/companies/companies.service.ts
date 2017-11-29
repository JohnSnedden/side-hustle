import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { SnackbarService } from '../shared/snackbar.service';

@Injectable()
export class CompaniesService {
  // user: any;

  constructor(
    private http: Http,
    private snackbarService: SnackbarService,
    public user: AuthService
  ) { }

  getUserToken() {
    console.log('in companies.s this.user.user.token is ', this.user.user.token);
    return this.user.user.token;
  }

  getAllCompanies() {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.get(environment.apiServer + `/companies`, config);
  }

  getOneCompany(companyId) {
    console.log(companyId);
    return this.http.get(environment.apiServer + `/companies/${companyId}`);
  }

  deleteCompany(company) {
    console.log(company.id);
    return this.http.delete(environment.apiServer + `/companies/${company.id}`);
  }

  saveCompany(newCompany) {
    console.log(newCompany);
    return this.http.post(environment.apiServer + `/companies`, newCompany);
  }

  updateCompany(updatedCompany) {
    return this.http.put(environment.apiServer + `/companies/${updatedCompany.id}`, updatedCompany);
  }

}
