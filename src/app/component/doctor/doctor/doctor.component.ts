    import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
    import {MatPaginator} from '@angular/material/paginator';
    import {MatSort} from '@angular/material/sort';
    import {MatTableDataSource} from '@angular/material/table';
    import { Appointment } from 'src/app/model/appointment';
    import { AppointmentsService } from 'src/app/services/appointments.service';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { Router } from '@angular/router';

// import '~mdb-ui-kit/css/mdb.min.css';


/** Constants used to fill up our data base. */
const names: string[] = [];
const Date: Date[] =[];
const slot: string[] = [];

interface doctor {  
  id: number,
  name: string,
  date: string,
  timeFrom: string,
  timeTo: string,
  available: number, 
}


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements AfterViewInit,OnInit  {

  appointments: Appointment[]=[];
  appointmentDates: string[]=[];
  selectedTimeSlots: Appointment[]=[];
  selectedSlot: Appointment={
    id: '',
    name: "",
    date: '',
    timeFrom: '',
    timeTo: '',
    available: 1,
  };
  

  selectedDate: string='';

  displayedColumns: string[] = ['id', 'name', 'date', 'timeFrom','timeTo','available'];
  dataSource = new MatTableDataSource(this.appointments);

  @ViewChild(MatPaginator) paginator: any ;
  @ViewChild(MatSort) sort! : MatSort;

  constructor(private appointmentsService: AppointmentsService, private routes:Router) {
    // Create 100 users
    //   const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render

  }

  ngOnInit(): void {
    this.appointmentsService.getAppointments().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
      this.appointmentDates = this.getUniqueAppointmentDates(this.appointments)
      this.selectedDate = this.appointmentDates[0];
      console.log(appointments);
      console.log(this.appointments);
      console.log(this.appointmentDates);
      this.selectDate(null);
      this.dataSource = new MatTableDataSource(this.appointments);  
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    })
  }

  ;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
