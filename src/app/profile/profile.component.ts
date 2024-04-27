import { Component, OnInit } from '@angular/core';
import { StudentProfile } from '../model/StudentProfile';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userId: string;
  role: string;
  studentProfile: StudentProfile;
  errorMessage:string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
    if(this.userId != undefined && this.userId != null && this.role!="admin"){
      this.getStudentProfile(this.userId);
    }   
  }

  getStudentProfile(userId:string) {
    this.userService.fetchStudentProfile(userId).subscribe(data => {
      this.studentProfile = data;

      // this.companyList=[...this.companyList,...this.companyList, ...this.companyList];
      console.log("Student Profile:", JSON.stringify(data));
    }),
    ((error: { message: any; }) => {
      this.errorMessage=error.message;
      console.log("Student Profile:", JSON.stringify(error.message));
    })

  }
}
