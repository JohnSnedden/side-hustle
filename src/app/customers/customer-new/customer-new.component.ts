import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../auth/auth.service';
import { SnackbarService } from '../../shared/snackbar.service';
import { CompaniesService } from '../../companies/companies.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  newCustomer = <any>{};

  companies = [];
  selectedValue: string;

      constructor(
        private router: Router,
        private location: Location,
        private snackbarService: SnackbarService,
        public user: AuthService,
        private companiesService: CompaniesService,
        private customersService: CustomersService,
      ) { }

      ngOnInit() {
        this.newCustomer.user_id = this.user.user.id;
        this.companiesService.getAllCompanies()
        .subscribe(
          response => {
            const userCompanies = response.json().companies;
            this.companies = userCompanies;
          },
          err => {
            this.snackbarService.showSnackBar('Error getting company list :(');
          }
        );
      }

      saveCustomer(newCustomer) {
        this.customersService.saveCustomer(newCustomer)
        .subscribe(
          response => {
            const customer = response.json();
            this.router.navigate(['/customers/' + customer.customer.id]);
            this.snackbarService.showSnackBar('Customer created!');
          },
          err => {
            this.snackbarService.showSnackBar('Error creating customer :(');
          }
        );
      }

      goBack(): void {
        this.location.back();
      }

}
