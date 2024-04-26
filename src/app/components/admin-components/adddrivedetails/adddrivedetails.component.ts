import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-adddrivedetails',
  templateUrl: './adddrivedetails.component.html',
  styleUrls: ['./adddrivedetails.component.css']
})
export class AdddrivedetailsComponent implements OnInit {

  drive = new Drive();

  @ViewChild('requestForm') public requestForm: NgForm;
  companyId: any;
  ID: any;
  companyList:any;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  
    this.getCompanyList();
  }

  getCompanyList() {
    this.adminService.fetchCompanyList().subscribe(res => {
      this.companyList=res
    })
  }

  submitRequest() {
    if (this.requestForm.valid) {
      console.log("Form Data : \n\n" + JSON.stringify(this.drive));

      const payload = {
        companyId: this.drive.companyId,
        driveDate: this.drive.driveDate,
        driveLocation: this.drive.driveLocation,
        offeredCtc: this.drive.offeredCtc,
        sscMarks: this.drive.sscMarks,
        hscMarks: this.drive.hscMarks,
        graduationMarks: this.drive.graduationMarks,
        activeBacklogStatus: this.drive.activeBacklogStatus,
        maxActiveBacklogAllowed: this.drive.maxActiveBacklogAllowed,
        historicalBacklogStatus: this.drive.historicalBacklogStatus,
        maxHistBacklogAllowed: this.drive.maxHistBacklogAllowed
      }

      this.adminService.submitAddDriveRequest(payload).subscribe(res => {
        alert("Request Submitted Successfully");

        this.router.navigate(['/adminhome']);
      })

    } else {
      this.requestForm.control.markAllAsTouched();
    }
  }

}

export class Drive {
  companyId: number
  driveDate: string
  driveLocation: string
  offeredCtc: string
  sscMarks: number
  hscMarks: number
  graduationMarks: number
  activeBacklogStatus: string
  maxActiveBacklogAllowed: number
  historicalBacklogStatus: string
  maxHistBacklogAllowed: number
}