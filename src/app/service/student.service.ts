import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.httpService.get(this.getHostURL()+'/drive/list');
  }
}
