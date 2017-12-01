import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { Location } from '@angular/common';

import { SnackbarService } from '../../shared/snackbar.service';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  updatedCompany = <any>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private snackbarService: SnackbarService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.companiesService.getOneCompany(param.id)
      .subscribe(
        response => {
        this.updatedCompany = response.json().company;
      },
      err => {
        this.snackbarService.showSnackBar('Error getting company data :(');
      });
    });
  }

  updateCompany(updatedCompany) {
    this.companiesService.updateCompany(updatedCompany)
    .subscribe(
      response => {
      const company = response.json();
      this.router.navigate(['/companies/' + updatedCompany.id]);
      this.snackbarService.showSnackBar('Company updated!');
    },
    err => {
      this.snackbarService.showSnackBar('Error updateing company :(');
    });
  }

  goBack(): void {
    this.location.back();
  }

}
