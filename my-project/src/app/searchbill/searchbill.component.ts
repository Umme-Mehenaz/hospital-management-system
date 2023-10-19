import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diagnosis } from '../diagnosis';

@Component({
  selector: 'app-searchbill',
  templateUrl: './searchbill.component.html',
  styleUrls: ['./searchbill.component.css']
})
export class SearchbillComponent {
  billid:any;
  name:any;
  id:any;
  bdate:any;
  price:any;
  totalbill:any;
  commision:any;
  subtotal:any;
  tid:any;
  tname:any;
  consultant:any;
  stsservice: any;
  constructor(private router: Router, private route: ActivatedRoute){

  }

  searchbill() {
    // let billid: Diagnosis = new Diagnosis(this.billid,this.name,this.id,this.bdate,this.price,this.totalbill,this.commision,this.subtotal,this.tid,this.tname,this.consultant);
    
    // this.stsservice.searchBill(billid).subscribe((response: null) => {
    //   console.log(response);
    //   if (response != null) {
    //     this.router.navigate(['billinfo']);
    //   } else {
    //     alert("Username or Password is wrong");
    //   }
    // })
    this.router.navigate(['billinfo', this.billid])
  }
}
