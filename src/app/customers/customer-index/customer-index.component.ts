import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service';
import { SnackbarService } from '../../shared/snackbar.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {

  allCustomers = [];

    constructor(
      private router: Router,
      public user: AuthService,
      private snackbarService: SnackbarService,
      private customersService: CustomersService
    ) { }

    ngOnInit() {
      // check if there is a logged in user.
      if (!this.user.user) {
        // if no logged in user then redirect to /login
        this.router.navigate(['/login']);
      } else {
        // get list of customers
        this.getAllCustomers();
      }
    }

    getAllCustomers() {
      this.customersService.getAllCustomers()
      .subscribe(
        response => {
          this.allCustomers = response.json().customers;
        },
        err => {
          this.snackbarService.showSnackBar('Error getting customer data :(');
        }
      );
    }

    deleteCustomer(deletedCustomer) {
      this.customersService.deleteCustomer(deletedCustomer)
      .subscribe(
        response => {
          const customerIndex = this.allCustomers.indexOf(deletedCustomer);
          this.getAllCustomers();
          this.snackbarService.showSnackBar('Customer deleted!');
        },
        err => {
          this.snackbarService.showSnackBar('Error deleting customer :(');
        }
      );
    }

}
