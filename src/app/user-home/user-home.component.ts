import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import {User} from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {


  constructor(private userService: UserService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
