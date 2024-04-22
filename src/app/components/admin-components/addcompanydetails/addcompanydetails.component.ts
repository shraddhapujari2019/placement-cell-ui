import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-addcompanydetails',
  templateUrl: './addcompanydetails.component.html',
  styleUrls: ['./addcompanydetails.component.css']
})
export class AddcompanydetailsComponent implements OnInit {

  companyDetails = new CompanyDetails();

  @ViewChild('requestForm') public requestForm: NgForm;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  submitRequest() {
    if (this.requestForm.valid) {
      console.log("Form Data : \n\n" + JSON.stringify(this.companyDetails));

      const payload = {
        companyName: this.companyDetails.company_name,
        orgType: this.companyDetails.org_type,
        sector: this.companyDetails.sector,
        companyWebsite: this.companyDetails.company_website,
        companyInfo: this.companyDetails.company_info,
        jobLocation: this.companyDetails.job_location,
        role: this.companyDetails.role
      }

      this.adminService.submitAddCompanyRequest(payload).subscribe(res => {
        alert("Request Submitted Successfully");

        this.router.navigate(['/adminhome']);
      })

    } else {
      this.requestForm.control.markAllAsTouched();
    }
  }

}

export class CompanyDetails {
  company_name: string
  org_type: string
  sector: string
  company_website: string
  company_info: string
  job_location: string
  role: string
}