import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { Location } from '@angular/common';

import { SnackbarService } from '../../shared/snackbar.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  updatedCustomer = <any>{};

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private location: Location,
      private snackbarService: SnackbarService,
      private customersService: CustomersService
    ) { }

    ngOnInit() {
      this.route.params.forEach( param => {
        this.customersService.getOneCustomer(param.id)
        .subscribe(
          response => {
          this.updatedCustomer = response.json().customer;
        },
        err => {
          this.snackbarService.showSnackBar('Error getting customer data :(');
        });
      });
    }

    updateCustomer(updatedCustomer) {
      this.customersService.updateCustomer(updatedCustomer)
      .subscribe(
        response => {
        const customer = response.json();
        this.router.navigate(['/customers/' + updatedCustomer.id]);
        this.snackbarService.showSnackBar('Customer updated!');
      },
      err => {
        this.snackbarService.showSnackBar('Error updateing customer :(');
      });
    }

    goBack(): void {
      this.location.back();
    }

}
