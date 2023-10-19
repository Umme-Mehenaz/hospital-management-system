import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discharge',
  templateUrl: './discharge.component.html',
  styleUrls: ['./discharge.component.css']
})
export class DischargeComponent {

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
  

doc_id: any;

constructor(private stsservice: ServiceService, private router: Router, private route: ActivatedRoute
  ) { }

showDinvoice(){
  this.router.navigate(['releseinvoice']);
}


}
