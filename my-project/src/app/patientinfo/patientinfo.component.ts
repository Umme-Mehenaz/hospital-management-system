import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student1 } from '../student1';

@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.css']
})
export class PatientinfoComponent {
  id: any;
  userid:any;
  name: any;
  phone: any;
  consultant: any;
  blood: any
  age: any;
  serial: any;
  specialist: any;
  gender: any;
  address: any;
  fee: any;
  date: any;
  student: any;
  constructor(private stservice: ServiceService, private router: Router,private route:ActivatedRoute) { }
  ngOnInit() {
    this.showpatient();
  }

  showpatient() {
    this.stservice.getAppointment()
      .subscribe(
        response => { this.student = response }
      );
      //this.router.navigate(["showpage"])
  }
  
  updated(id: any) {
    this.router.navigate(["patientupd", id]);
  }
  
  deletep(id:any) {
    console.log(id);
    
    //this.student = new Student1(this.id,this.userid, this.serial, this.name, this.age, this.gender, this.address, this.specialist, this.blood, this.phone, this.date, this.fee, this.consultant);
    this.stservice.deletep(this.student[id])
      .subscribe(
        data =>{ console.log("success", data),
        this.showpatient();}
       );

      
      // this.router.navigate(["show"]);
      

  }

}
