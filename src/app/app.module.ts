import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './component/patient/patient/patient.component';
import { DoctorComponent } from './component/doctor/doctor/doctor.component';
import { DoctorAdviceComponent } from './component/doctor/doctor-advice/doctor-advice.component';
import { DoctorInfoComponent } from './component/doctor/doctor-info/doctor-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PatientHistoryComponent } from './component/doctor/patient-history/patient-history.component';


@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    DoctorAdviceComponent,
    DoctorInfoComponent,
    PatientHistoryComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
