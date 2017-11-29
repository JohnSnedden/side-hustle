import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-company-index',
  templateUrl: './company-index.component.html',
  styleUrls: ['./company-index.component.css']
})
export class CompanyIndexComponent implements OnInit {

  allCompanies = [];

  constructor(
    private companiesService: CompaniesService
  ) { }

  ngOnInit() {
    // this.companiesService.getAllCompanies()
    // .subscribe(response => {
    //   console.log(response.json());
    //   this.allCompanies = response.json();
    // });
  }

  getAllCompanies() {
    this.companiesService.getAllCompanies()
    .subscribe(response => {
      console.log(response.json());
      this.allCompanies = response.json().companies;
    });
  }

}
