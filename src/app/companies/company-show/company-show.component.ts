import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SnackbarService } from '../../shared/snackbar.service';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent implements OnInit {

  oneCompany;

  constructor(
    private route: ActivatedRoute,
    private snackbarService: SnackbarService,
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.companiesService.getOneCompany(param.id)
      .subscribe(
        response => {
          this.oneCompany = response.json();
        },
        err => {
          this.snackbarService.showSnackBar('Error getting company data :(');
        }
      );
    });
  }

}
