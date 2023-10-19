import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {
  username: any;
  pass: any;

  constructor(private stsservice: ServiceService, private router: Router) { }
  login() {
    let user: User = new User(this.username, this.pass)
    
    this.stsservice.loginCheck(user).subscribe(response => {
      console.log(response);
      if (response != null) {
        this.router.navigate(['administrator1']);
      } else {
        alert("Username or Password is wrong");
      }
    })
  }
}
