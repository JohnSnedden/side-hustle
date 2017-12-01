import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerIndexComponent } from './customer-index/customer-index.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';
import { CustomerShowComponent } from './customer-show/customer-show.component';

const customerRoutes: Routes = [
  {
      path: 'customers',
      component: CustomersComponent,
      children: [ // create the sub sections (children) for this route
          {
              path: '',
              component: CustomerIndexComponent
          },
          {
              path: 'new',
              component: CustomerNewComponent
          },
          {
              path: 'edit/:id',
              component: CustomerEditComponent
          },
          {
              path: ':id',
              component: CustomerShowComponent
          }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(customerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CustomersRoutingModule { }
