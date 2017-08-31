import { Component ,HostListener} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DataService} from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
showNav=true;
logoutResponse:any;
constructor(private router:Router, private dataService:DataService)
{

}
 /*@HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {
    // ...
        alert("open");
  }
*/

checkChanges()
{
  //check for any changes based on req.
return true;
}

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHander(event) {

    if(this.checkChanges())
    {
event.returnValue = "Changes may not be saved, It will close the application tab";
    }
    else
    {
//for false return based on req.
this.dataService.getServiceDataGET("api/logout")
.subscribe(logoutResponse=>this.logoutResponse=logoutResponse);
  alert("CLOSE");  
  }
      
  }
 /*showHeaderB(){
    if (this.router.url.startsWith('/login/')) {
      return true;
    } else {
      return false;
    }
  }*/
}
