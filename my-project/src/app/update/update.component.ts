import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  doc_id: any;
  name: any;
  email: any;
  specialist: any;
  experiance: any;
  followup: any;
  fee: any
  img: any;
  totalpatient: any;
  commission: any;
  total: any;
  student: any;

  constructor(private stservice: ServiceService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit(){
    let doc_id = this.route.snapshot.params['doc_id'];
    this.stservice.getStudentById({ doc_id }).subscribe(data => {
      this.student = data;
      this.doc_id=this.student.doc_id;
      this.name=this.student.name;
      this.email=this.student.email;
      this.specialist=this.student.specialist;
      this.experiance=this.student.experiance;
      this.followup=this.student.followup;
      this.fee=this.student.fee;
      this.img = this.student.img;
    });
  }
  updateStudent() {
    this.student = new Student(this.doc_id, this.name, this.email, this.specialist,this.experiance, this.followup, this.fee, this.img, this.totalpatient, this.commission, this.total);
    this.stservice.update(this.student)
      .subscribe(data =>console.log("success",data),
      
          
      )
    this.router.navigate(['doctor1'])
  }
  showpage() {
    this.router.navigate(["doctor1"])
  }
}

