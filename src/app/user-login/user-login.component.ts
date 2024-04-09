import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm:FormGroup;
  errorMessage:string;

  constructor(private formBuilder:FormBuilder, private router:Router, private userService:UserService) { }

  ngOnInit(): void {

    this.loginForm =  this.formBuilder.group({

      userId:['',[Validators.required,Validators.pattern("[0-9]{5}")]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(15)]]
    })

    let userId = localStorage.getItem("userId");
    let role = localStorage.getItem("role");

    // if(userId != null && role!= null){

    //   if(role == 'admin')
    //     this.router.navigate(['adminhome']);
    //   else if (role == 'user')
    //     this.router.navigate(['home']);  
    // }
  }

  login(){
    let userId = this.loginForm.value.userId;
    let role = "user";

    this.userService.userLogin(new UserLogin(userId,this.loginForm.value.password)).subscribe(
      (data) => {
        localStorage.setItem("userId",userId);
        localStorage.setItem("role",role);
        this.router.navigate(['home']);
      },
      (error) => {
        this.loginForm.reset();
        this.errorMessage = error;
      }
    )    
  }
}
