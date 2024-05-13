import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-allstudents',
  templateUrl: './listallstudents.html',
  styleUrls: ['./listallstudents.css']
})
export class AllStudents implements OnInit {

  stiudentList: any;
  constructor(private studentService: StudentService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getStudentlist();
  }

  getStudentlist() {
    this.adminService.getStudentlist().subscribe(res => {
      this.stiudentList = res;

      // this.companyList=[...this.companyList,...this.companyList, ...this.companyList];
      console.log("***************** \\n\n\n\n", JSON.stringify(res));
    })
  }

}
