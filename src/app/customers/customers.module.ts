import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { CustomersService } from './customers.service';
import { CustomersComponent } from './customers.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerShowComponent } from './customer-show/customer-show.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    CustomersComponent,
    CustomerEditComponent,
    CustomerIndexComponent,
    CustomerNewComponent,
    CustomerShowComponent
  ],
  providers: [
    CustomersService
  ]
})
export class CustomersModule { }
