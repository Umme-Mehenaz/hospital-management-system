import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Student2 } from '../student2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

 sc : Student2 = new Student2();
 
  constructor(private stsservice: ServiceService, private router: Router) { }
  
    
   appoinment(){
    this.sc = new Student2(this.sc.id, this.sc.name, this.sc.email, this.sc.age, this.sc.gender,this.sc.password);
    this.stsservice.insertStudent2(this.sc).subscribe(data => {
      console.log(data);
      if (data != null) {
        this.router.navigate(['plogin']);
      } else {
        alert("Information is wrong");
      }
    })

   }

    
  }



