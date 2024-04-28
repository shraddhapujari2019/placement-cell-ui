import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  userId: string;
  role: string;
  selectedTab: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
  }

  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    this.router.navigate(['']);
  }

  navigateToChild(navigation) {

    switch (navigation) {

      case 'drive':
        this.selectedTab = "drive";
        this.router.navigate(['/userhome/apply-new']);
        break;

      case 'allCompanies':
        this.selectedTab = "allCompanies";
        this.router.navigate(['/userhome/allCompanies']);
        break;

      case 'myDrives':
        this.selectedTab = "myDrives";
        this.router.navigate(['/userhome/my-drives']);
        break;

      default: this.router.navigate[''];

    }
  }
}
