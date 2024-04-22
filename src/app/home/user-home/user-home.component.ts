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

      case 'company':
        this.selectedTab = "company";
        this.router.navigate(['/userhome/apply-new']);
        break;

      case 'drive':
        this.selectedTab = "drive";
        this.router.navigate(['/userhome/upcoming']);
        break;

      case 'results':
        this.selectedTab = "results";
        this.router.navigate(['/userhome/check-results']);
        break;

      default: this.router.navigate[''];

    }
  }
}
