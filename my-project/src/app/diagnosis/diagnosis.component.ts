import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent {
  tid: any;
  tname: any;
  price: any;
 
  test: any;
  constructor(private stservice: ServiceService, private router: Router,private route:ActivatedRoute) { }


  ngOnInit() {
    this.showDiagnosis();
  }

  showDiagnosis() {
    this.stservice.getDiagnosis()
      .subscribe(
        response => { this.test = response }
      );
      //this.router.navigate(["showpage"])
  }

}
