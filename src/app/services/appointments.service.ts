import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private httpClient: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>('./assets/doctorData.json');
  }

  saveAppointment(appointment: Appointment): Observable<void> {
    return this.httpClient.post<void>('someApi', appointment);
  }
}

