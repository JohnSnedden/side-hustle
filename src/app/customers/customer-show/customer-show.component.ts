import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SnackbarService } from '../../shared/snackbar.service';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-show',
  templateUrl: './customer-show.component.html',
  styleUrls: ['./customer-show.component.css']
})
export class CustomerShowComponent implements OnInit {

  oneCustomer;

    constructor(
      private route: ActivatedRoute,
      private snackbarService: SnackbarService,
      private customersService: CustomersService
    ) { }

    ngOnInit() {
      this.route.params.forEach( param => {
        this.customersService.getOneCustomer(param.id)
        .subscribe(
          response => {
            this.oneCustomer = response.json();
          },
          err => {
            this.snackbarService.showSnackBar('Error getting customer data :(');
          }
        );
      });
    }

}
