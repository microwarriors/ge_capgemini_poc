import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
showNav=true;

constructor(private router:Router)
{

}
 /*showHeaderB(){
    if (this.router.url.startsWith('/login/')) {
      return true;
    } else {
      return false;
    }
  }*/
}
