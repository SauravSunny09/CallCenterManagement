import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointment } from 'src/app/model/appointment';
import { NgModule } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  appointments: Appointment[]=[];

  appointmentDates: string[]=[];

  selectedTimeSlots: Appointment[]=[];

  selectedDate: string='';
  selectedSlot: Appointment={
    id: '',
    name: "",
    date: '',
    timeFrom: '',
    timeTo: '',
    available: 1,
  };

  constructor(private appointmentsService: AppointmentsService) {
  }

  ngOnInit(): void {
    this.appointmentsService.getAppointments().subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
      this.appointmentDates = this.getUniqueAppointmentDates(this.appointments)
      this.selectedDate = this.appointmentDates[0];
      this.selectDate(null);
    });
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
  };
  
  onSubmit(): void {
    this.appointmentsService.saveAppointment(this.selectedSlot);
  }

  
}
