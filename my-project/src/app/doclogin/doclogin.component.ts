import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {
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
  email: any;
  date: any;
  student: any;
doc_id:any;
  constructor(private router: Router, private route: ActivatedRoute){
  }


  doclogin(){
    console.log(this.doc_id,this.email);
    this.router.navigate(["docinfo", this.doc_id, this.email]);
  }
}
