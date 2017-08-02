import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

data:any;
  constructor(private http:Http,
  private dataService: DataService) { }

  ngOnInit() {
  }

  logout()
  {
    this.dataService.getServiceDataGET("api/logout")
    .subscribe(data=>this.data=data);

  }

}
