import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './home/user-home/user-home.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { AdminService } from './service/admin.service';
import { AppHomeComponent } from './home/app-home/app-home.component';
import { AddcompanydetailsComponent } from './components/admin-components/addcompanydetails/addcompanydetails.component';
import { AdddrivedetailsComponent } from './components/admin-components/adddrivedetails/adddrivedetails.component';
import { AddplacedStudentsComponent } from './components/admin-components/addplaced-students/addplaced-students.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyComponent } from './components/student-components/apply/apply.component';
import { UpcomingdrivesComponent } from './components/student-components/upcomingDrives/upcomingdrives.component';
import { CheckResultsComponent } from './components/student-components/check-results/check-results.component';
import { DriveDetailsComponent } from './details/drive-details/drive-details.component';
import { StudentDetailsComponent } from './details/student-details/student-details.component';
import { CompanyDetailsComponent } from './details/company-details/company-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    AdminHomeComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AppHomeComponent,
    AddcompanydetailsComponent,
    AdddrivedetailsComponent,
    AddplacedStudentsComponent,
    ProfileComponent,
    ApplyComponent,
    UpcomingdrivesComponent,
    CheckResultsComponent,
    DriveDetailsComponent,
    StudentDetailsComponent,
    CompanyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
