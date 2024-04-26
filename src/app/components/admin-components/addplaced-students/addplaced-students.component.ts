import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var $: any;
@Component({
  selector: 'app-addplaced-students',
  templateUrl: './addplaced-students.component.html',
  styleUrls: ['./addplaced-students.component.css']
})
export class AddplacedStudentsComponent implements OnInit {

  placement = new Placement();

  @ViewChild('requestForm') public requestForm: NgForm;
  companyId: any;
  ID: any;
  studentList: any;
  driveList: any;
  // selectedStudent:any;

  
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getStudentList()
    this.getDriveList()
  }

  getStudentList() {
    this.adminService.getStudentlist().subscribe(res => {
      this.studentList = res;
    }
    )

  }

  getDriveList() {
    this.adminService.getDriveList().subscribe(res => {
      this.driveList = res;
    }
    )
  }


  submitRequest() {
    if (this.requestForm.valid) {
      console.log("Form Data : \n\n" + JSON.stringify(this.placement));

      // const payload = {
      //   studentId: this.placement.studentId,
      //   driveId: this.placement.driveId,
      //   offeredCtc: this.placement.offeredCtc,
      //   hasAccepted: this.placement.hasAccepted,
      //   offerReleaseDate: this.placement.offerReleaseDate,
      //   dateOfJoining: this.placement.dateOfJoining
      // }

      this.adminService.submitAddPlacementRequest(this.placement).subscribe(res => {
        alert("Request Submitted Successfully");

        this.router.navigate(['/adminhome']);
      })

    } else {
      this.requestForm.control.markAllAsTouched();
    }
  }

}

export class Placement {
  studentId: number
  driveId: number
  offeredCtc: string
  hasAccepted: string
  offerReleaseDate: string
  dateOfJoining: string
}
