import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Student2 } from '../student2';

@Component({
  selector: 'app-plogin',
  templateUrl: './plogin.component.html',
  styleUrls: ['./plogin.component.css']
})
export class PloginComponent {
  id:any;
  name: any;
  
  age: any;
  email:any;
  gender:any;
  password: any;


  constructor(private stsservice: ServiceService, private router: Router) { }
  login() {
    let user: Student2 = new Student2(this.id, this.name, this.email, this.age, this.gender, this.password)
    
    this.stsservice.loginCheck1(user).subscribe(response => {
      console.log(response);
      if (response != null) {
        this.router.navigate(['appointment/' + this.name + "/" + this.password]);
      } else {
        alert("Username or Password is wrong");
      }
    })
  }

}
