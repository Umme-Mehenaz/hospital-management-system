
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Student2 } from '../student2';
import { Student1 } from '../student1';
import { Hospital } from '../hospital';

@Component({
  selector: 'app-padmit',
  templateUrl: './padmit.component.html',
  styleUrls: ['./padmit.component.css']
})
export class PadmitComponent {
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
  ngOnInit() {
    this.getReferDoctor();
  }


  admits() {
    this.hospital = new Hospital(this.id, this.name, this.fname, this.phone, this.age, this.gender, this.blood, this.address, this.addoc, this.unit, this.admitdate, this.seat);
    console.log(this.hospital);

    this.stservice.admit(this.hospital).subscribe(data  => console.log("Success", data));
    this.router.navigate(["patient"])
    alert("Amit Successful");
    
  }

  getReferDoctor() {

    this.stservice.getreferDoctor(this.name)
      .subscribe(
        response => {
          this.docref = response
          console.log(this.docref);

        })
  }

}
