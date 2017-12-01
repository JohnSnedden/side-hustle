import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { SnackbarService } from '../../shared/snackbar.service';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

  newCompany = <any>{};

    constructor(
      private router: Router,
      private location: Location,
      private snackbarService: SnackbarService,
      private companiesService: CompaniesService,
    ) { }

    ngOnInit() {
    }

    saveCompany(newCompany) {
      this.companiesService.saveCompany(newCompany)
      .subscribe(
        response => {
          const company = response.json();
          this.router.navigate(['/companies/' + company.company.id]);
          this.snackbarService.showSnackBar('Company created!');
        },
        err => {
          this.snackbarService.showSnackBar('Error creating company :(');
        }
      );
    }

    goBack(): void {
      this.location.back();
    }

}
