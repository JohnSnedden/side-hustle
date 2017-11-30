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

  updatedCompany = <any>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    this.route.params.forEach( param => {
      this.companiesService.getOneCompany(param.id)
      .subscribe(response => {
        console.log(response.json());
        this.updatedCompany = response.json();
      });
    });
  }

  updateCompany(updatedCompany) {
    console.log('updating company yo!');
    console.log('in edit.c updateCompany, updatedCompany is ', updatedCompany);
    this.companiesService.updateCompany(updatedCompany)
    .subscribe(response => {
      const company = response.json();
      this.router.navigate(['/companies/' + updatedCompany.company.id]);
    });
  }

  goBack(): void {
    this.location.back();
    // this.router.navigate(['/companies/']);
  }

}
