import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docinfo',
  templateUrl: './docinfo.component.html',
  styleUrls: ['./docinfo.component.css']
})
export class DocinfoComponent {
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
  list: any;
  doc_id: any;
  constructor(private stservice:ServiceService,private router: Router, private route: ActivatedRoute){

  }
  ngOnInit(){
    let did = this.route.snapshot.params['id'];
    console.log(did);
    
    this.stservice.docAppInfo(did).subscribe(data => {
      console.log(data);
      
     this.list = data;
    });
}
}
