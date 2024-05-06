import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { StudentProfile } from '../model/StudentProfile';
declare var $: any;
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  errorMessage: string;
  studentProfile: StudentProfile = new StudentProfile();

  @ViewChild('profileForm') public profileForm: NgForm;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

  }

  initializeForm(): void {
    this.studentProfile = new StudentProfile();
  }

  submitRequest() {
    let userId = localStorage.getItem("userId");

    if (this.profileForm.valid && userId != undefined && userId != null) {
      console.log("Form Data : \n\n" + JSON.stringify(this.studentProfile));
      this.studentProfile.username = userId;
      this.userService.createStudentProfile(this.studentProfile).subscribe(res => {

        $("#exampleModal").addClass("show");
        $("#exampleModal").css({ display: "block" });

      })
    } else {
      this.profileForm.control.markAllAsTouched();
    }
  }

  navigateToDashboard() {
    this.router.navigate(['userhome'])
  }
}

