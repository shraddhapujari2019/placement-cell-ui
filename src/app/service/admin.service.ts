import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AdminLogin } from '../model/AdminLogin';
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userUrl: string = "http://localhost:8081/users";
  
  constructor(
        private http: HttpClient
  ) { }

  adminLogin(adminLogin: AdminLogin):Observable<Message>{
    const url= this.userUrl+"/adminlogin";

    return this.http.post<Message>(url,adminLogin).pipe(
      tap(data => console.log("Response : "+JSON.stringify(data))),
      catchError(this.handleError)
    )    
  }

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

    return throwError(errorMessage);
  }
}