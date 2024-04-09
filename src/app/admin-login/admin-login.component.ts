import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { AdminLogin } from 'src/app/model/AdminLogin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder:FormBuilder, private router:Router, private adminService:AdminService ) { }

  ngOnInit(): void {

    this.loginForm =  this.formBuilder.group({
      userId:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(15)]]
    })

    let userId:string = localStorage.getItem("userId");
    let role: string = localStorage.getItem("role");

    if(userId != null && role!= null){

      if(role == 'admin')
        this.router.navigate(['adminhome']);
      else if (role == 'user')
        this.router.navigate(['home']);  
  }

}
login(){
  let userId = this.loginForm.value.userId;
  let role = "admin";

  this.adminService.adminLogin(new AdminLogin(userId,this.loginForm.value.password)).subscribe(
    (data) => {
      localStorage.setItem("userId",userId);
      localStorage.setItem("role",role);
      this.router.navigate(['adminhome']);
    },
    (error) => {
      this.loginForm.reset();
      this.errorMessage = error;
    }
  )    
}
}
