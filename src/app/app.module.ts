import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { CompaniesRoutingModule } from './companies/companies-routing.module';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { SnackbarService } from './shared/snackbar.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';

import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { SignoutComponent } from './auth/signout/signout.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChangepwComponent } from './auth/changepw/changepw.component';

import { CompaniesModule } from './companies/companies.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    SigninComponent,
    SignoutComponent,
    SignupComponent,
    ChangepwComponent,
    HomeComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthRoutingModule,
    CompaniesRoutingModule,
    CompaniesModule,
  ],
  providers: [
    AuthService,
    SnackbarService,
    SidenavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
