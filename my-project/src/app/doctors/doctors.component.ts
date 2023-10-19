import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
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
  updatepage(id: any) {
    this.router.navigate(["update", id]);
  }
  newPage() {
    this.router.navigate(['insert']);
  }
  delStudent(id:any) {
    
    this.students = new Student(this.doc_id, this.name, this.email, this.specialist,this.experiance, this.followup, this.fee, this.img, this.totalpatient, this.commission, this.total);
    this.stservice.delete(this.students)
      .subscribe(
        data =>{ console.log("success", data),
        this.showStudents();}
       );

      
      this.router.navigate(["show"]);
      

  }

}
