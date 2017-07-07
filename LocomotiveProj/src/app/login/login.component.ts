import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: any = {};
  constructor(private router: Router) { 
   
   }

  ngOnInit() {
  }
 
  login(model) {
        
      if(model.username=='user@123' && model.password=='pwd@123')
	  {
	  this.router.navigate(['/data']);
	  }

                    
            
    };

}
