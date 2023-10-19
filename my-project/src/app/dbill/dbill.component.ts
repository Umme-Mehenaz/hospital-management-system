import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student2 } from '../student2';
import { Diagnosis } from '../diagnosis';

@Component({
  selector: 'app-dbill',
  templateUrl: './dbill.component.html',
  styleUrls: ['./dbill.component.css']
})
export class DbillComponent {

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
  billid: any;
  price: any;
  test: any = [];
  docref: any;
  totalbill: any;
  subtotal: any;
  speDNames: any[] = [];
  doctor: any[] = [];

 

  constructor(private stservice: ServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDname();
    this.getReferDoctor();
  this.stservice.getnewBillId().subscribe(data=>{
    this.billid=data.billid;
  })

  }

  getidInfo() {
    console.log(this.id);

    this.stservice.getIdInfo(this.id).subscribe(data => {
      console.log(data);

      this.name = data.name;
      this.email = data.email;
      this.age = data.age;
      this.gender = data.gender;
    });
  }

  getDname() {
    console.log();
    this.speDNames = [];
    this.stservice.getDName().subscribe(data => {
      // console.log(data);

      this.speDNames = data;

    })
  }
  getReferDoctor() {

    this.stservice.getreferDoctor(this.name)
      .subscribe(
        response => {
          this.docref = response
          console.log(this.docref);

        })
  }


  showTestList() {
    this.stservice.getTestList(this.tname).subscribe(response => {
      this.test.push(response)
      this.calcsubTotal();
      console.log(response);
      
    });
  }

  calcsubTotal() {
    this.subtotal = 0;
    this.test.map((i: any) => {
      this.subtotal += parseInt(i.price);
    });
  }

  calcTotal() {
    this.totalbill = this.subtotal - this.subtotal * this.commision / 100;
  }
  allsave() {
   

    let d = new Diagnosis(this.billid, this.name, this.id, this.bdate, this.price, this.subtotal, this.commision, this.totalbill, "", "",this.consultant);
    console.log(d);

    this.stservice.insertBill(d).subscribe(data => {
      console.log(data);
    });

    for (let t of this.test) {
      let d1 = new Diagnosis(this.billid, "", this.id,"", t.price, "", "", "", t.tid, t.tname,this.consultant);
      console.log(d1);
      this.stservice.insertBillDetails(d1).subscribe(data => console.log("Success", data))
    }

    this.router.navigate(['prelease']);
  }
 



}
