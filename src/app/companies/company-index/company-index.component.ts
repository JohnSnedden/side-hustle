import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-index',
  templateUrl: './company-index.component.html',
  styleUrls: ['./company-index.component.css']
})
export class CompanyIndexComponent implements OnInit {

  allCompanies = [];

  constructor(
    private router: Router,
    public user: AuthService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    // check if there is a logged in user.
    if (!this.user.user) {
      // if no logged in user then redirect to /login
      this.router.navigate(['/login']);
    } else {
      // get list of companies
      this.getAllCompanies();
    }
  }

  getAllCompanies() {
    this.companiesService.getAllCompanies()
    .subscribe(response => {
      console.log(response.json());
      this.allCompanies = response.json().companies;
    });
  }

  deleteCompany(deletedCompany) {
    console.log('in deleteCompany ', deletedCompany);
    this.companiesService.deleteCompany(deletedCompany)
    .subscribe(response => {
      const companyIndex = this.allCompanies.indexOf(deletedCompany);
      // this.allCompanies.splice(companyIndex, 1);
      this.getAllCompanies();
    });
  }

}
