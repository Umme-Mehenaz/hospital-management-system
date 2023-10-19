import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {
  id:any;
  name:any;
  email:any;
  specialist:any;
  experiance:any;
  followup:any;
  fee:any;
  img:any;
  totalpatient: any;
  commission: any;
  total: any;
  doc_id:any;
  student:any;

  constructor(private stservice: ServiceService, private router: Router) { }


  saveStudent() {
    this.student = new Student(this.doc_id, this.name, this.email, this.specialist,this.experiance, this.followup, this.fee, this.img, this.totalpatient, this.commission, this.total);
    console.log(this.student);
    
    this.stservice.insertStudent(this.student).subscribe(data => console.log("Success", data))
    this.router.navigate(['doctor1']);
  }
  updateStudent() {
    this.student = new Student(this.doc_id, this.name, this.email, this.specialist,this.experiance, this.followup, this.fee, this.img, this.totalpatient, this.commission, this.total);
    this.stservice.update(this.student).subscribe(data => console.log("Success", data))
    this.router.navigate(['doctor1']);
  }
  deleteStudent() {
    this.student = new Student(this.doc_id, this.name, this.email, this.specialist,this.experiance, this.followup, this.fee, this.img, this.totalpatient, this.commission, this.total);
    this.stservice.delete(this.student).subscribe(data => console.log("Success", data))
    this.router.navigate(['doctor1']);
  }
}
