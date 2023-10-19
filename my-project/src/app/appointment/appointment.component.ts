import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { Student1 } from '../student1';
import { Student2 } from '../student2';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  id: any;
  userid: any;
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
  afterDiscounted: any;

  doc_id: any;
  specilistNames: any[] = [];
  speDoctorNames: any[] = []

  constructor(private stservice: ServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.data;
    let name = this.route.snapshot.params['name'];
    let password = this.route.snapshot.params['password'];
    this.student = new Student2(this.id, this.name, this.age, this.gender);
    this.stservice.getRegisterById(name, password).subscribe(data => {
      this.id = data.id;
      this.userid = data.id
      this.name = data.name;
      this.age = data.age;
      this.gender = data.gender;
    }
    )

    this.stservice.getSpecialist().subscribe((data) => {
      this.specilistNames = data;
    })
    // this.stservice.getStudentById({ id }).subscribe(data => {
    //   this.student = data;
    //   this.id = this.student.id;
    //   this.serial = this.student.serial;
    //   this.name = this.student.name;
    //   this.age = this.student.age;
    //   this.gender = this.student.gender;
    //   this.address = this.student.address;
    //   this.specialist = this.student.specialist;

    //   this.blood = this.student.blood;
    //   this.phone = this.student.phone;
    //   this.date = this.student.date;
    //   this.fee = this.student.fee;
    //   this.consultant = this.student.consultant;


    // });
  }
  updateStudent() {
    this.student = new Student1(this.id, this.userid, this.serial, this.name, this.age, this.gender, this.address, this.specialist, this.blood, this.phone, this.date, this.fee, this.consultant, this.doc_id);
    this.stservice.update(this.student)
      .subscribe(data => console.log("success", data),


      )
    this.router.navigate(['doctor1'])
  }
  showpage() {
    this.router.navigate(["doctor1"])
  }
  saveStudent() {
    this.student = new Student1(this.id, this.userid, this.serial, this.name, this.age, this.gender, this.address, this.specialist, this.blood, this.phone, this.date, this.fee, this.consultant, this.doc_id);
    console.log(this.student);

    this.stservice.insertStudent1(this.student).subscribe(data => console.log("Success", data))
    //alert("Appointment Successful");
    // this.router.navigate(['appointment']);
  }

  showpage1() {
    this.saveStudent();
    this.router.navigate(["patient"])
    alert("Appointment Successful");
  }
  data(value: any) {
    // this.student=new Student2(this.id,this.name,this.age,this.gender);
    //   this.stservice.getRegisterById()
    //   .subscribe(
    //     data => console.log("success",data),
    //   )



  }
  specialistn(spe: any) {
    console.log(spe);
    this.speDoctorNames = [];
    this.stservice.getSpecialistDoctor(spe).subscribe(data => {
      console.log(data);

      this.speDoctorNames = data;

    })
  }

  getDoctorFee(docName: any) {
    this.stservice.getDocIdByName(docName).subscribe((doc) => {
      this.doc_id = doc.doc_id;
      this.fee = doc.fee;
      
    });


  }
  getLastVisit() {
    this.stservice.getLastVisit(this.userid, this.doc_id).subscribe((response) => {
      if (response != null) {
        let d = new Date(response.date);
        let a = new Date(this.date);

        const diff = a.getTime() - d.getTime();
        const day = diff / (1000 * 3600 * 24);
        const finalDay = Math.round(day);
        console.log(finalDay);

        if(finalDay < 7) {
          this.afterDiscounted = this.fee - 100
        } else {
          this.afterDiscounted = this.fee;
        }
        
      }
    });

  }


}
