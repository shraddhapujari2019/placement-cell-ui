import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { UserLogin } from '../model/UserLogin';
import { Observable, throwError } from 'rxjs';

import { tap,catchError } from "rxjs/operators"
import { Message } from '../model/Message';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:8081/users";
  
  constructor(
        private http: HttpClient
  ) { }

  //1
  //check if the user is an existing one and with valid password
  userLogin(userLogin: UserLogin):Observable<Message>{
    const url= this.userUrl+"/login";

    return this.http.post<Message>(url,userLogin).pipe(
      tap(data => console.log("Response : "+JSON.stringify(data))),
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

    return throwError(errorMessage);
  }

}
