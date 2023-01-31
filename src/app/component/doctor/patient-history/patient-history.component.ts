import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getPendingAppoinment();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getPendingAppoinment(){
    this.bdata.getAllAppoinment().subscribe(res => {
      res.forEach(book=>{
        if(book.status==0){
          this.bookList.push(book);
        }
      })    
      this.dataSource=new MatTableDataSource(this.bookList);
    }, err => {
        alert('Error while fetching Book data');
    })   
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



patientHistory():void{
  this.routes.navigate(['/patientHistory'])
}

private getUniqueAppointmentDates(appointments: Appointment[]): string[] {
    const appointmentDates = appointments.map((appointment: Appointment) => {
        return appointment.date;
      })
    return appointmentDates
       .filter((date: string, index: number) => appointmentDates.indexOf(date) === index);
  }

  selectDate = (event: any) => {
    const filteredSlots = this.appointments.filter((appointment: Appointment) => appointment.date === this.selectedDate);
    this.selectedTimeSlots = filteredSlots;
  }

}
