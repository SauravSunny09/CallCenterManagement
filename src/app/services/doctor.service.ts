import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doctors } from '../model/Doctors.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctors() {
    return this.http.get<{ [key: string]: Doctors }>('https://appclinic-f1d5c-default-rtdb.firebaseio.com/doctors.json')
      .pipe(map((res) => {
        const dctr = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            dctr.push({...res[key], id: key })
          }
        }
        return dctr;
      })
      )
  
}
}