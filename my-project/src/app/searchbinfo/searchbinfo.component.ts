import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnosis } from '../diagnosis';

@Component({
  selector: 'app-searchbinfo',
  templateUrl: './searchbinfo.component.html',
  styleUrls: ['./searchbinfo.component.css']
})
export class SearchbinfoComponent {
  earning:any;
  billid:any;
  name:any;
  id:any;
  price:any;
  subtotal:any;
  commision:any;
  totalbill:any;
  test:any;


  constructor(private stservice: ServiceService, private router: Router, private route: ActivatedRoute) { }
  

}
