import { Component, OnInit } from '@angular/core';

import {Http, Response} from '@angular/http'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
IsHidden = false;
//this.redClassBool = false;
 name:string;
  showHide:boolean ;
  result:any;
   public  localVar:any;
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: any = 51.673858;
  lng: any = 7.815982;
  label?: string;
	draggable: boolean;
  
  results = [];
  
  showRandomMarkers() {
  console.log("hi");
    let randomLat: number, randomLng: number;
	
    this.results = [];
    for (let i = 0 ; i < 9; i++) {
      randomLat = Math.random() * 0.0099 + 43.7250;
      randomLng = Math.random() * 0.0099 + -79.7699;
      this.results.push([randomLat, randomLng]);
	  
    }
  console.log(this.results[2]);
  }
 
   callvideo(){
  
  alert("open video");
  this.IsHidden= !this.IsHidden;
 // this.redClassBool = !this.redClassBool
 // this.width=value.srcElement.style['400px'];
  }
  
  
  
  
  constructor(private http:Http) { 
   this.showHide = true;
   
 
  // var temp = this;
   //var counter = 1;
  // var xvy;
  // result:any;
 
 
 this.http.get('assets/latlongdata.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
 
      //let obj:any=this.fun().subscribe(res => this.result = res);
 
  // console.log(this.result);
   
 // var abc= finalResponse ;
 //console.log(for i =0; i<=this.result; i++);
     //   var myTimeOut = setInterval(()=>{ alert("hi"); counter++; if(counter == 12){ clearInterval(myTimeOut)} }, 4000);
    
   
   
   
  }
  
  
 
  
  
  
 
  ngOnInit() {

 
 } 
  
  
  
  
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    {  
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {  
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {  
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  

  
}


 
 

