import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { CompanyIndexComponent } from './company-index/company-index.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyNewComponent } from './company-new/company-new.component';
import { CompanyShowComponent } from './company-show/company-show.component';

const companyRoutes: Routes = [
  {
      path: 'companies',
      component: CompaniesComponent,
      children: [ // create the sub sections (children) for this route
          {
              path: '',
              component: CompanyIndexComponent
          },
          {
              path: 'new',
              component: CompanyNewComponent
          },
          {
              path: 'edit/:id',
              component: CompanyEditComponent
          },
          {
              path: ':id',
              component: CompanyShowComponent
          }
      ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CompaniesRoutingModule { }
