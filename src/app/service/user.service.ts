import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { UserLogin } from '../model/UserLogin';
import { Observable, throwError } from 'rxjs';

import { tap,catchError } from "rxjs/operators"
import { Message } from '../model/Message';
import { StudentProfile } from '../model/StudentProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:8089";
  users: UserLogin[] = [];
  
  constructor(
        private http: HttpClient
  ) {
    this.users.push( new UserLogin("student1", "user1@123"));
    this.users.push( new UserLogin("student2", "user2@123"));
    this.users.push( new UserLogin("student3", "user3@123"));
  }

  //1
  //check if the user is an existing one and with valid password
  userLogin(userLogin: UserLogin): Observable<string>|Observable<any>{
    const url= this.userUrl+"/login";

    return this.http.post(url,userLogin, {responseType: 'text'}).pipe(
      tap(data => console.log("Response : "+data)),
      catchError(this.handleError)
    );
  //  let temp = this.users.filter(user => user.username===userLogin.username && user.password===userLogin.password)[0];
    
  //   if(temp==undefined){
  //     return throwError(()=> new Error("Invalid username or password"));
  //   }
  //   return Observable.create(observer => {
  //     observer.next(temp);
  //     //call complete if you want to close this stream (like a promise)
  //     observer.complete();
  //   });
  }

  registerStudent(userLogin: UserLogin): Observable<UserLogin>|Observable<any>{
    const url= this.userUrl+"/students/create-student"
    return this.http.post(url,userLogin).pipe(
         tap(data => console.log("Response : "+data.toString)),
         catchError(this.handleError)
       );
  }

  fetchStudentProfile(userId: string): Observable<StudentProfile>|Observable<any>{
    const url= this.userUrl+"/students/student-profile?username="+userId
    return this.http.get(url).pipe(
         tap(data => console.log("Response : "+data.toString)),
         catchError(this.handleError)
       );
  }
  // Error handler 
  private handleError(err:HttpErrorResponse){

    console.log(err);
    let errorMessage = '';

    if(err.error instanceof Error){
      console.log("Network Error: "+err.error.message);
      errorMessage = err.error.message;
    }

    else if(err.statusText == "Unknown Error"){
      console.log("Unknown Error: "+err.statusText);
      errorMessage = "Unable to connect to the server";
    }
    else{
      console.log("Backend Error: "+err.error.message);
      errorMessage = err.error.message;
    }

    return throwError(()=> new Error(errorMessage));
  }
}
