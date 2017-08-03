import { Component, OnInit,ElementRef } from '@angular/core';

import {Http, Response} from '@angular/http';
import {DataService} from '../services/data.service';
declare var google: any;
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
 // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
 name:string;
   options: any;

  showHide:boolean =false;
  result:any;
 showTable:boolean=true;
 showGraph:boolean=false;
 data:any;
value:any;

arrTime:Array<any> = [];
  arrdistance:Array<any> = [];
  arrspeed:Array<any> = [];
  arrtet:Array<any> = [];
  arreab:Array<any> = [];
  arreot:Array<any> = [];


latPosition:any;
 longPosition:any;
 position:Array<any>=[];
 graphPosition:any;

   public  localVar:any;
 linedata:Object;
  public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";
  
  
  
  
  constructor(private http:Http,private dataService:DataService) { 
   this.showHide = true;
   this.showTable=false;
   this.showGraph=true;

  
  }

  newData(tableData)
  {
for(let item in tableData)
//for(let i=0;i<tableData.length;i++)
{
 
  this.value=tableData[item].ts;
 this.arrTime.push(tableData[item].ts);
 this.arrdistance.push(tableData[item].distance);
 this.arrspeed.push(tableData[item].speed);
 this.arrtet.push(tableData[item].tet);
 this.arreab.push(tableData[item].eab);
 this.arreot.push(tableData[item].eot);

 this.options = {
            title : { text : 'Locomotive Data' },
             xAxis: [{
                type: 'datetime',
                categories: this.arrTime,
                
                 title: {
                    text: 'DateTime'
                }
         
    }],
            series: [
                {name: 'Speed',data: this.arrspeed },
                 {name: 'Distance',data: this.arrdistance},
                {name: 'Tractive Effort Total',data: this.arrtet},
                {name: 'EAB BP Pressure',data: this.arreab},
                  {name: 'EOT BP Pressure',data: this.arreot}
               
                
            ]
        };
}
//for (var i = 0; i < this.arrtet.length; i++) {
  //  this.arrtet[i] = this.arrtet[i].replace(/"/g, "");
  console.log(this.arrTime);
console.log(this.arrtet);
}

   clickedRow(tableitems)
  {
    console.log(tableitems);
    this.latPosition=tableitems.lat;
    this.longPosition=tableitems.lng;
    console.log(this.latPosition);
    this.position.push({lat:this.latPosition,lng:this.longPosition});
  
   let pos=  JSON.stringify(this.position);
let pos1=pos.substring(1,pos.length-1);
this.graphPosition=JSON.parse(pos1);
//console.log(this.graphPosition);

//console.log(this.latPosition);
  }
  
   ngOnInit() {

            this.dataService.getServiceDataGET("assets/tableData.json")
            .subscribe(tableData=> {this.newData(tableData)
            });

  this.dataService.getServiceDataGET("assets/tableData.json")
            .subscribe(data=> this.data=data);
  }
  toggleTable()
  {
  this.showTable=false;
  this.showGraph=true;
  }
  
  toggleGraph()
  {
  this.showTable=true;
  this.showGraph=false;
  }
  
 
  
}
