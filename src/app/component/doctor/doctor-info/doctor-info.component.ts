import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Doctors } from 'src/app/model/Doctors.model';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  doctorId:string='';
    doctorName:string='';
    doctorSpecialization:string='';
    doctorAge:number=0;
    doctorExpiriene:number=0;
    doctorGender:string='';
    doctortimeSlot:string='';
    usersAppointments:string='';
    id:string='';

  viewDetail : Doctors={
    doctorId:'',
    doctorName:'',
    doctorSpecialization:'',
    doctorAge:0,
    doctorExpiriene:0,
    doctorGender:'',
    doctortimeSlot:'',
    usersAppointments:'',
    id:'',
  };

  doctortemp : Doctors[] =[];

  constructor(private bdata : DoctorService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getDoctorDetails();
    this.doctorId=this.viewDetail.doctorId;
    this.doctorName=this.viewDetail.doctorName;
    this.doctorSpecialization=this.viewDetail.doctorSpecialization;
    this.doctorAge=this.viewDetail.doctorAge;

  }


  getDoctors(id:string) {
    return this.http.get<{ [key: string]: Doctors}>('https://appclinic-f1d5c-default-rtdb.firebaseio.com/doctors'+id+'.json');
      .pipe(map((res) => {
        const docRecord = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            docRecord.push({...res[key], id: key })
          }
        }
        return docRecord;
      })
      )

}

getDoctorDetails(){
  this.getDoctors().subscribe(res=>{
    this.doctortemp=res;
  })

}

}
