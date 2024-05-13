import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-allcompanies',
  templateUrl: './listallcompanies.html',
  styleUrls: ['./listallcompanies.css']
})
export class AllCompaniesListComponent implements OnInit {

  companyList: any;
  constructor(private studentService: StudentService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getCompanyList();
  }

  getCompanyList() {
    this.adminService.fetchCompanyList().subscribe(res => {
      this.companyList = res;

      // this.companyList=[...this.companyList,...this.companyList, ...this.companyList];
      console.log("***************** \\n\n\n\n", JSON.stringify(res));
    })
  }

}
