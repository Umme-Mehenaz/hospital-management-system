import { Component } from '@angular/core';
import { Student1 } from '../student1';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  userid:any;
  constructor(private router: Router, private route: ActivatedRoute){

  }
search(){
  console.log(this.userid);
  this.router.navigate(["view-app",this.userid]);
}

}
