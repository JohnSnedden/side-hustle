import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router/';
import { Location } from '@angular/common';

import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  // currentCompany = <any>{};
  updatedCompany = <any>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    console.log('in comp-edit ngOnInit, this.route.params is', this.route.params);
    this.route.params.forEach( param => {
      console.log('in comp-edit ngOnInit, param.id is', param.id);
      this.companiesService.getOneCompany(param.id)
      .subscribe(response => {
        console.log('getOneCompany response.json() is ', response.json());
        console.log('getOneCompany response.json().company is ', response.json().company);
        this.updatedCompany = response.json().company;
      });
    });
  }

  updateCompany(updatedCompany) {
    console.log('updating company yo!');
    console.log('in edit.c updateCompany, updatedCompany is ', updatedCompany);
    this.companiesService.updateCompany(updatedCompany)
    .subscribe(response => {
      // console.log('in updComp, updatedCompany.company.id is ', updatedCompany.company.id);
      console.log('in updComp, updatedCompany.id is ', updatedCompany.id);
      const company = response.json();
      this.router.navigate(['/companies/' + updatedCompany.id]);
    });
  }

  goBack(): void {
    this.location.back();
    // this.router.navigate(['/companies/']);
  }

}
