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
import { AllCompaniesComponent } from './components/student-components/all-companies/all-companies.component';
import { MyDrivesComponent } from './components/student-components/my-drives/my-drives.component';
import { RegisterComponent } from './login/register/register.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';


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
    path: "register",
    component: RegisterComponent
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
        path: 'allCompanies',
        component: AllCompaniesComponent
      },
      {
        path: 'my-drives',
        component: MyDrivesComponent
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'create-profile',
    component: CreateProfileComponent
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
        component: AddcompanydetailsComponent,
        data: { tab: 'company' }
      },

      {
        path: 'add-drive-details',
        component: AdddrivedetailsComponent,
        data: { tab: 'drive' }
      },

      {
        path: 'add-placement-details',
        component: AddplacedStudentsComponent,
        data: { tab: 'placement' }
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
