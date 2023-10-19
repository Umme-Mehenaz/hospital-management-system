import { Component } from '@angular/core';
import { Student1 } from '../student1';
import { ActivatedRoute, Router } from '@angular/router';

import { Student2 } from '../student2';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.css']
})
export class ViewAppComponent {
  id: any;
  userid: any;
  name: any;
  email: any;
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
  img: any;
  doc_id: any;
  student: any;
  patient: any;
  list: any;
  constructor(private stservice: ServiceService, private router: Router, private route: ActivatedRoute) {

  }
  //   ngOnInit(){
  //      this.getidInfo();
  //     let pid = this.route.snapshot.params['userid'];
  //     console.log(pid);

  //     this.stservice.appointmentByUserId(pid).subscribe(data => {
  //       console.log(data);

  //      this.list = data;

  //     });


  // }
  data(value: any) {
    // this.student=new Student2(this.id,this.name,this.age,this.gender);
    //   this.stservice.getRegisterById()
    //   .subscribe(
    //     data => console.log("success",data),
    //   )



  }
  ngOnInit() {
    this.data;
    let user = this.route.snapshot.params['userid'];
    console.log(user);

    this.stservice.appointmentByUserId(user).subscribe(data => {
      this.userid = data.userid;
      this.phone = data.phone;
      this.name = data.name;
      this.age = data.age;
      this.blood = data.blood;
      this.gender = data.gender;

    });



    let pid = this.route.snapshot.params['userid'];
    console.log(pid);

    this.stservice.appointmentByUserId(pid).subscribe(data => {
      console.log(data);

      this.list = data;

    });
    this.stservice.getIdInfo(pid).subscribe(data => {
      console.log(data);
      this.patient = data;
      this.id = pid;
      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.age = data.age;
    });

  }
  // getidInfo() {
  //   console.log(this.id);

  //   this.stservice.getIdInfo(this.id).subscribe(data => {
  //     console.log(data);


  //     this.patient = data;
  //   });
  // }
  updateStudent1() {
    this.student = new Student1(this.id, this.userid, this.serial, this.name, this.age, this.gender, this.address,
      this.specialist, this.blood, this.phone, this.date, this.fee, this.consultant, this.doc_id);
    this.stservice.appointmentByUserId(this.student)
      .subscribe(
        data => console.log("success", data),
      )
    alert("Appointment Successful");
  }
}
