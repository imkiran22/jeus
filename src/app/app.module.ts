import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthCompleteGuard } from './auth/auth-complete.guard';
import { PatientsComponent } from './patients/patients.component';
import { PatientsTabComponent } from './patients-tab/patients-tab.component';
import { PatientsTableComponent } from './patients-table/patients-table.component';
import { PatientsFilterComponent } from './patients-filter/patients-filter.component';
import { PatientService } from './app-services/patients.service'
import { LocalStorageService } from './app-services/local-storage.service';
import { HideOnMouseLeaveDirective } from './directives/hide-on-mouse-leave.directive';
import { InMemoryServiceService } from './app-services/in-memory-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientAllDetailsComponent } from './patient-all-details/patient-all-details.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { PatientPrescriptionComponent } from './patient-prescription/patient-prescription.component';
import { PatientImrComponent } from './patient-imr/patient-imr.component';
import { DrugsComponent } from './drugs/drugs.component';
import { DrugsTabComponent } from './drugs-tab/drugs-tab.component';
import { DrugsTabTemplateComponent } from './drugs-tab-template/drugs-tab-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    LoginComponent,
    PatientsComponent,
    PatientsTabComponent,
    PatientsTableComponent,
    PatientsFilterComponent,
    HideOnMouseLeaveDirective,
    DashboardComponent,
    PatientAllDetailsComponent,
    PatientProfileComponent,
    PatientPrescriptionComponent,
    PatientImrComponent,
    DrugsComponent,
    DrugsTabComponent,
    DrugsTabTemplateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    NgbModule,
    SharedModule
  ],
  providers: [AuthService, 
    InMemoryServiceService, 
    LocalStorageService, 
    PatientService, 
    AuthGuard, 
    AuthCompleteGuard, 
    {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }