import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-releseinvoice',
  templateUrl: './releseinvoice.component.html',
  styleUrls: ['./releseinvoice.component.css']
})
export class ReleseinvoiceComponent {
  id: any;
  userid: any;
  name: any;
  fname:any;
  phone: any;
  addoc: any;
  blood: any
  age: any;
  
  docref: any;
  gender: any;
  address: any;
  unit: any;
  admitdate: any;
  seat:any;
  hospital:any;
 
  constructor(private stservice: ServiceService, private router: Router, private route: ActivatedRoute) { }


}
