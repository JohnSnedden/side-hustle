import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChangepwComponent } from './auth/changepw/changepw.component';
import { SnackbarService } from './shared/snackbar.service';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyIndexComponent } from './companies/company-index/company-index.component';
import { CompaniesService } from './companies/companies.service';
import { CompanyEditComponent } from './companies/company-edit/company-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
    ChangepwComponent,
    CompaniesComponent,
    CompanyIndexComponent,
    CompanyEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    SnackbarService,
    CompaniesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
