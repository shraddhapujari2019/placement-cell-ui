import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService: HttpClient) { }

  getHostURL(){
    return environment.apiHost;
  }
  
  fetchDriveList() {
    return this.httpService.get(this.getHostURL()+'/drive/get-all-drives');
  }

  fetchDriveListByStudent(username:string) {
    return this.httpService.get(this.getHostURL()+'/students/get-drives?username='+username);
  }

  applyForDrive(username:string, driveId:string):Observable<any> {
    let url = this.getHostURL() + '/students/create-application?driveId=' + driveId + '&username=' + username;
    return this.httpService.post(url, null,  {responseType: 'text'});
  }
}
