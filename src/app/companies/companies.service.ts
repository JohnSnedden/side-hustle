import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { SnackbarService } from '../shared/snackbar.service';

@Injectable()
export class CompaniesService {

  constructor(
    private http: Http,
    private snackbarService: SnackbarService,
    public user: AuthService
  ) { }

  getUserToken() {
    return this.user.user.token;
  }

  getAllCompanies() {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.get(environment.apiServer + `/companies`, config);
  }

  getOneCompany(companyId) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.get(environment.apiServer + `/companies/${companyId}`, config);
  }

  deleteCompany(company) {
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.delete(environment.apiServer + `/companies/${company.id}`, config);
  }

  saveCompany(company) {
    const newCompany = {
      company
    };
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.post(environment.apiServer + `/companies`, newCompany, config);
  }

  updateCompany(company) {
    const updCompany = {
      company
    };
    const config = {};
    config['headers'] = { Authorization: 'Token token=' + this.getUserToken()};
    return this.http.put(environment.apiServer + `/companies/${updCompany.company.id}`, updCompany, config);
  }

}
