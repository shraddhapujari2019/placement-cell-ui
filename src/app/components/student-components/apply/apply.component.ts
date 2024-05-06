import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  companyList: any;
  appliedCompanyList: [];
  applyNowBtnTxt = "Apply Now !";
  alreadyAppliedBtnTxt = "Already Applied";
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getDriveList();
    this.fetchAppliedDriveList();
  }

  getDriveList() {
    this.studentService.fetchDriveList().subscribe(res => {
      this.companyList = res;

      // this.companyList=[...this.companyList,...this.companyList, ...this.companyList];
      console.log("***************** \\n\n\n\n", JSON.stringify(res));
    })
  }

  applyNow(drive) {
    //To do after navigation
    let username = localStorage.getItem("userId");
    alert("Applying for company : => " + drive?.companyName + " at " + drive?.driveLocation);
    this.studentService.applyForDrive(username, drive.driveId).subscribe(res => {
      alert("Applied successfully!");
      this.ngOnInit();
    })
  }

  isApplyDisabled(driveDetails): boolean {
    let currentDate = Date.now();

    let lastDateToApply = new Date(driveDetails?.driveDate);

    let applyDaysInterval = 1000 * 60 * 60 * 24 * 5;

    if ((lastDateToApply.getTime() - currentDate) > applyDaysInterval) {
      return true;
    }

    return false;
  }

  fetchAppliedDriveList() {
    let username = localStorage.getItem("userId");
    this.studentService.fetchDriveListByStudent(username).subscribe((res: any) => {
      this.appliedCompanyList = res;
    })
  }

  isAlreadyAppliedDrive(currentDriveId): boolean {
    if (this.appliedCompanyList.find(ele => ele['driveId'] == currentDriveId)) {
      return true;
    }
    return false;
  }
}
