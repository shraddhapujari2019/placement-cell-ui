import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './route-guards/admin-guard.service';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AppHomeComponent } from './home/app-home/app-home.component';
import { UserGuardService } from './route-guards/user-guard.service';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { DriveDetailsComponent } from './details/drive-details/drive-details.component';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { CompanyDetailsComponent } from './details/company-details/company-details.component';


const routes: Routes = [

  {
    path:"",
    component: AppHomeComponent,
    outlet:"primary"
  },
  {
    path:"home",
    component: AppHomeComponent,
    outlet:"primary"
  },
  {
    path:"login",
    component: UserLoginComponent,
    outlet:"primary"
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent,
    outlet:"primary"
  },
  {
    path:"userhome", 
    children:[
      {
        path:"",
        component: UserHomeComponent,
        canActivate: [UserGuardService],
        outlet:"primary"
      },
      {
        path:"drives",
        component: DriveDetailsComponent,
        canActivate: [UserGuardService],
        outlet:"drives"
      },
      {
        path:"companies",
        component: CompanyDetailsComponent,
        canActivate: [UserGuardService],
        outlet:"companies"
      }
    ]
  },
  {
    path:"adminhome",
    children:[
      { 
        path: "",
        component: AdminHomeComponent,
        canActivate: [AdminGuardService],
        outlet:"primary"
      },
      {
        path:"students",
        component: StudentDetailsComponent,
        canActivate: [AdminGuardService],
        outlet:"primary"
      },
      {
        path:"drives",
        component: DriveDetailsComponent,
        canActivate: [AdminGuardService]
      },
      {
        path:"companies",
        component: CompanyDetailsComponent,
        canActivate: [AdminGuardService]
      }
    ]
  },

  {
    path:"**",
    redirectTo:"",
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
