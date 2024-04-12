import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardService } from './service/admin-guard.service';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { AppHomeComponent } from './home/app-home/app-home.component';
import { UserGuardService } from './service/user-guard.service';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { UserLoginComponent } from './login/user-login/user-login.component';


const routes: Routes = [

  {
    path:"",
    component: AppHomeComponent
  },
  {
    path:"home",
    component: AppHomeComponent
  },
  {
    path:"login",
    component: UserLoginComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"userhome",
    component: UserHomeComponent,
    canActivate: [UserGuardService]
  },
  {
    path:"adminhome",
    component: AdminHomeComponent,
    canActivate: [AdminGuardService]
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
