import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'my-drives',
  templateUrl: './my-drives.component.html',
  styleUrls: ['./my-drives.component.css']
})
export class MyDrivesComponent implements OnInit {

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

}
