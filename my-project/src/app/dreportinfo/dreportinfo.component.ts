import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dreportinfo',
  templateUrl: './dreportinfo.component.html',
  styleUrls: ['./dreportinfo.component.css']
})
export class DreportinfoComponent {
  doc_id: any;
  user_id:any;
  name: any;
  email: any;
  specialist: any;
  experiance: any;
  followup: any;
  fee: any;
  img:any;
  totalpatient: any;
  commission: any;
  total: any;
  doctor: any;
  com:any;
  
  constructor(private stservice: ServiceService, private router: Router,private route:ActivatedRoute) { }
  ngOnInit() {
    this.showDoctorReport();
    this. showDoctorComision();
  }

  showDoctorReport() {
    this.stservice.getDoctorReport()
      .subscribe(
        response => { this.doctor = response 
          console.log(response);
        }
      );
   
  }
  showDoctorComision() {
    this.stservice.getDoctorComision()
      .subscribe(
        response => { this.com = response 
          console.log(response);
        }
      );
     
  }

  sum(a: any, b: any) {
    return parseFloat(a) + parseFloat(b);
  }

}
