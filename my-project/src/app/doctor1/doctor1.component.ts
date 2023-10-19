import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-doctor1',
  templateUrl: './doctor1.component.html',
  styleUrls: ['./doctor1.component.css']
})
export class Doctor1Component {
  doc_id: any;
  name: any;
  email: any;
  specialist: any;
  experiance: any;
  followup: any;
  fee: any;
  img:any;
  totalpatient: any;
  commission: any;
  total: any;
  students: any;
  constructor(private stservice: ServiceService, private router: Router,private route:ActivatedRoute) { }
  ngOnInit() {
    this.showStudents();
  }

  showStudents() {
    this.stservice.getStudents()
      .subscribe(
        response => { this.students = response }
      );
      //this.router.navigate(["showpage"])
  }
  insertpage() {
    this.router.navigate(["insert"])
  }
  updatepage(doc_id: any) {
    this.router.navigate(["update", doc_id]);
  }
  newPage() {
    this.router.navigate(['insert']);
  }
  delStudent(doc_id:any) {
    
    // this.students = new Student(this.doc_id, this.name, this.email, this.specialist,this.experiance, this.followup, this.fee, this.img, this.totalpatient, this.commission, this.total);
   console.log(doc_id);

    this.stservice.delete(doc_id)
      .subscribe(
        data =>{ console.log("success", data),
        this.showStudents();}
       );
  }

}
