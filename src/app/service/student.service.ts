import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpService: HttpClient) { }

  fetchDriveList() {
    return this.httpService.get('http://localhost:8089/drive/list');
  }
}
