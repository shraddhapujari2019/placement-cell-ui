import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/UserLogin';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  errorMessage:string;
  successMessage:string;

  constructor(private formBuilder:FormBuilder, private router:Router, private userService:UserService) { }

  ngOnInit(): void {

    this.registerForm =  this.formBuilder.group({

      userId:['',[Validators.required,Validators.pattern("[A-Za-z0-9.]{6,15}")]],
      password:['',[Validators.required,Validators.minLength(7),Validators.maxLength(15)]]
    })
  }

  registerStudent(){

    this.userService.registerStudent(new UserLogin(this.registerForm.value.userId, this.registerForm.value.password)).subscribe(
      (data) => {
        this.successMessage = "Registration success! Try to login now";
      },
      (error) => {
        this.registerForm.reset();
        this.errorMessage = error;
      }
    )    
  }

}
