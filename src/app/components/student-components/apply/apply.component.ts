import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  companyList: any;
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getDriveList();
  }

  getDriveList() {
    this.studentService.fetchDriveList().subscribe(res => {
      this.companyList = res;

      // this.companyList=[...this.companyList,...this.companyList, ...this.companyList];
      console.log("***************** \\n\n\n\n", JSON.stringify(res));
    })
  }

  applyNow(drive){
    //To do after navigation
    let username = localStorage.getItem("userId");
    alert("Applying for company : => " + drive?.companyName + " at "+drive?.driveLocation);
    this.studentService.applyForDrive(username, drive.driveId).subscribe(res => {
      alert("Applied successfully!");
    })
  }
}
