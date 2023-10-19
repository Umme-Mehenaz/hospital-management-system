import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prelease',
  templateUrl: './prelease.component.html',
  styleUrls: ['./prelease.component.css']
})
export class PreleaseComponent {
  billid:any;
  id: any;
  name: any;
  email: any;
  age: any;
  gender: any;
  consultant: any;
  bdate: any;
  tname: any;
  tid: any;
  total: number = 0;
  discount: number = 0;
  stotal: number = 0;
  commision: any;
  pid: any;
 
  price: any;
  test: any = [];
  docref: any;
  totalbill: any;
  subtotal: any;
  list:any;

  invoice: any;
  invoiceDetails: any;

  constructor(private stservice:ServiceService,private router: Router, private route: ActivatedRoute){

  }

  ngOnInit(){
    let billid = this.route.snapshot.params['billid'];
    console.log(billid);
    
    this.stservice.getBillinfoByInvoice(billid).subscribe(data => {
      console.log(data);
      this.invoice = data;
     
    });
    let billid1 = this.route.snapshot.params['billid'];
    console.log(billid1);
    
    this.stservice.getBillDinfoByInvoice(billid1).subscribe(data => {
      console.log(data);
      
      this.invoiceDetails = data;
    });
}


}
