import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-show',
  templateUrl: './company-show.component.html',
  styleUrls: ['./company-show.component.css']
})
export class CompanyShowComponent implements OnInit {

  oneCompany;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    console.log('this.route.params is ', this.route.params);
    this.route.params.forEach( param => {
      this.companiesService.getOneCompany(param.id)
      .subscribe(response => {
        console.log('company-show res.json is ', response.json());
        this.oneCompany = response.json();
        console.log('this.oneCompany is ', this.oneCompany);
      });
    });
  }

}
