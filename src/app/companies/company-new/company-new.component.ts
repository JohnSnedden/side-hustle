import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-new',
  templateUrl: './company-new.component.html',
  styleUrls: ['./company-new.component.css']
})
export class CompanyNewComponent implements OnInit {

  newCompany = <any>{};

    constructor(
      private companiesService: CompaniesService,
      private router: Router
    ) { }

    ngOnInit() {
    }

    saveCompany(newCompany) {
      console.log('saving company');
      console.log(newCompany);
      this.companiesService.saveCompany(newCompany)
      .subscribe(response => {
        console.log(response.json());
        const company = response.json();
        this.router.navigate(['/companies/' + company.company.id]);
      });
    }

}
