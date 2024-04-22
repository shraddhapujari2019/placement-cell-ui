import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'placement-cell-ui';
  userId: string;
  role: string;


  constructor(private router: Router) { }

  async ngOnInit() {

    await this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
  }


  logout() {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    this.router.navigate(['userhome']);
  }

  defaultHome(){
    if(this.userId){
      if(this.role=='admin'){
        this.router.navigate(['/adminhome']);
      }else{
        this.router.navigate(['/userhome']);
      }
    }
    
  }
}
