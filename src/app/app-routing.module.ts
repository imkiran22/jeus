import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthCompleteGuard } from './auth/auth-complete.guard';
import { PatientsComponent } from './patients/patients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientAllDetailsComponent } from './patient-all-details/patient-all-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/patients-details', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthCompleteGuard] },
  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'drugs', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'calendar', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'patients-details', component: PatientAllDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }