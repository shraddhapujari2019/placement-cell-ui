import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [

  {
    path:"",
    component: UserLoginComponent
  },
  {
    path:"index",
    component: UserHomeComponent
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
