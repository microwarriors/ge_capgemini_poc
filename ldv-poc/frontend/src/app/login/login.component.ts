import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: any = {};
 loginResponse:boolean;
  constructor(private router: Router,private http:Http) { 
   
   }

  ngOnInit() {
  }
 
  login(model) {
        console.log(model);
     /* if(model.username=='user@123' && model.password=='pwd@123')
	  {
	  this.router.navigate(['/data']);
  }*/
  
  this.http.post("api/login",model).map(response=>response.json())
  .subscribe(loginResponse=>{this.afterLogin(loginResponse)});

                    
            
    };

    afterLogin(loginResponse)
    {
      
console.log(loginResponse);
if(loginResponse==true)
{
  this.router.navigate(['/data']);
}
    }

}
