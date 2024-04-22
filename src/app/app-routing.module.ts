import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './route-guards/admin-guard.service';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AppHomeComponent } from './home/app-home/app-home.component';
import { UserGuardService } from './route-guards/user-guard.service';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AddcompanydetailsComponent } from './components/admin-components/addcompanydetails/addcompanydetails.component';
import { AdddrivedetailsComponent } from './components/admin-components/adddrivedetails/adddrivedetails.component';
import { AddplacedStudentsComponent } from './components/admin-components/addplaced-students/addplaced-students.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyComponent } from './components/student-components/apply/apply.component';
import { UpcomingdrivesComponent } from './components/student-components/upcomingDrives/upcomingdrives.component';
import { CheckResultsComponent } from './components/student-components/check-results/check-results.component';


const routes: Routes = [

  {
    path: "",
    component: AppHomeComponent
  },
  {
    path: "home",
    component: AppHomeComponent
  },
  {
    path: "login",
    component: UserLoginComponent
  },
  {
    path: "adminlogin",
    component: AdminLoginComponent
  },
  {
    path: "userhome",
    component: UserHomeComponent,
    canActivate: [UserGuardService],
    children: [
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full'
      // },

      {
        path: 'apply-new',
        component: ApplyComponent
      },
      {
        path: 'upcoming',
        component: UpcomingdrivesComponent
      },
      {
        path: 'check-results',
        component: CheckResultsComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: "adminhome",
    component: AdminHomeComponent,
    children: [

      // {
      //   path:'',
      //   redirectTo:'add-company-details',
      //   pathMatch:'full'
      // },

      {
        path: 'add-company-details',
        component: AddcompanydetailsComponent
      },

      {
        path: 'add-drive-details',
        component: AdddrivedetailsComponent
      },

      {
        path: 'add-placement-details',
        component: AddplacedStudentsComponent
      }

    ],
    canActivate: [AdminGuardService]
  },

  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
