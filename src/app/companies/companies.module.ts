import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { CompaniesComponent } from './companies.component';
import { CompaniesService } from './companies.service';
import { CompanyIndexComponent } from './company-index/company-index.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { CompanyNewComponent } from './company-new/company-new.component';
import { CompanyShowComponent } from './company-show/company-show.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    CompaniesComponent,
    CompanyIndexComponent,
    CompanyEditComponent,
    CompanyNewComponent,
    CompanyShowComponent
  ],
  providers: [
    CompaniesService,
  ]
})
export class CompaniesModule { }
