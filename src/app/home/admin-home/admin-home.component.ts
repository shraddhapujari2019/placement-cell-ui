import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  userId: string;
  role: string;
  selectedTab: string;
  constructor(private router: Router, private activeatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");

    this.preSelectMenu();
  }

  preSelectMenu() {

    if (window.location.href.includes('/add-company-details')) {
      this.selectedTab = "company"
    } else if (window.location.href.includes('/add-drive-details')) {
      this.selectedTab = "drive"

    } else if (window.location.href.includes('/add-placement-details')) {
      this.selectedTab = "placement"

    } else {
      this.selectedTab = "";
    }
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
        this.router.navigate(['/adminhome/add-company-details']);
        break;

      case 'drive':
        this.selectedTab = "drive";
        this.router.navigate(['/adminhome/add-drive-details']);
        break;

      case 'placement':
        this.selectedTab = "placement";
        this.router.navigate(['/adminhome/add-placement-details']);
        break;

      default: this.router.navigate[''];

    }
  }

  ngDestory(){
    this.selectedTab="";
  }
}
