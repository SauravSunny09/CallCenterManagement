import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAdviceComponent } from './component/doctor/doctor-advice/doctor-advice.component';
import { DoctorInfoComponent } from './component/doctor/doctor-info/doctor-info.component';
import { DoctorComponent } from './component/doctor/doctor/doctor.component';
import { PatientComponent } from './component/patient/patient/patient.component';

const routes: Routes = [
  {path : '', redirectTo :'patient', pathMatch:'full'},
  {path : 'patient', component : PatientComponent},
  {path : 'doctor', component : DoctorComponent},
  {path : 'doctorAdvice', component : DoctorAdviceComponent},
  {path : 'doctorInfo', component : DoctorInfoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
