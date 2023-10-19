import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student1 } from '../student1';

@Component({
  selector: 'app-patientupd',
  templateUrl: './patientupd.component.html',
  styleUrls: ['./patientupd.component.css']
})
export class PatientupdComponent {
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
  doc_id:any;
  student: any;

  constructor(private stservice: ServiceService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit(){
     let id = this.route.snapshot.params['id'];
     this.stservice.getAppiontmentById(id).subscribe(data => {
       this.student = data;
       this.id=this.student.id;
       this.userid=this.student.userid;
       this.serial=this.student.serial;
       this.name=this.student.name;
       this.age=this.student.age;
       this.gender=this.student.gender;
       this.address=this.student.address;
       this.specialist=this.student.specialist;
       this.blood=this.student.blood;
       this.phone=this.student.phone;
       this.date=this.student.date;
       this.fee=this.student.fee;
       this.doc_id=this.student.doc_id;
       this.consultant = this.student.consultant;
    });
   }
  updated() {
    this.student = new Student1(this.id,this.userid, this.serial, this.name, this.age, this.gender, this.address, this.specialist, this.blood, this.phone, this.date, this.fee, this.consultant,this.doc_id);
    this.stservice.updated(this.student)
      .subscribe(data =>console.log("success",data),
      )
      this.router.navigate(['patientinfo'])
  }
          
     
  showpage() {
    this.router.navigate(["patientinfo"])
  }
}


