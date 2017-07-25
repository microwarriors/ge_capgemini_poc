import { Component, OnInit,ElementRef } from '@angular/core';

import {Http, Response} from '@angular/http'
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

   public  localVar:any;
 linedata:Object;
  public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";
  
  
  
  
  constructor(private http:Http) { 
   this.showHide = true;
   this.showTable=false;
   this.showGraph=true;

    this.options = {
            title : { text : 'Locomotive Data' },
            series: [
                {name: 'Speed',data: [29.9, 71.5, 106.4, 112.2]},
                {data: [29.9, 1.5, 1.4, 12.2]},
                {data: [12.9, 11.5, 1.4, 18.2]},
                  {data: [14.9, 18.5, 11.4, 18.2]}
               
                
            ]
        };
        console.log(this.options.series[1].data);
     

  
  }
  
  ngOnInit() {

var latarray = [42.85,43.85,44.85];
var longarray =[-94.65,-111.65,-118.65];
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 7,
center: {lat: 41.85, lng: -87.65}


});
 this.http.get("assets/tableData.json")
  .map((response: Response) => response.json())
            .subscribe(data=> {
                this.data = data
            });
directionsDisplay.setMap(map);
calculateAndDisplayRoute(directionsService, directionsDisplay);
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
var waypts = [];
var iLat : any = 41.85;
var iLng : any = -87.65;
//another code
var k =0;
var interval = setInterval(function () {
var   iLat:number = latarray[k];
var iLng:number = longarray[k];
waypts.push({
location: new google.maps.LatLng(iLat, iLng),
stopover: true
});
directionsService.route({
origin: {lat: 41.85, lng: -87.65},
destination: {lat: iLat, lng: iLng},
waypoints: waypts,
optimizeWaypoints: true,
travelMode: 'DRIVING'
}, function(response, status) {
 if (status === 'OK') {
directionsDisplay.setDirections(response);
} else {
window.alert('Directions request failed due to ' + status);
}
});
k++;
if (k == 3) clearInterval(interval);
}, 2000);	

}
 
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
  
  public lineChartData:Array<any> = [
    {data: [10, 10.5, 10.8, 20, 20.4, 20.9, 100], label: 'Distance'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Speed'},
  
	{data: [18, 48, 77, 9, 100, 27, 40], label: 'Tractive Effort (in LBS)'},
	{data: [82, 83, 84, 85, 86, 87, 88], label: 'EAB BP Pressure'},
	{data: [255, 256, 257, 258, 259, 215, 225], label: 'EOT BP Pressure'},
	{data: [72, 71, 72, 73, 74, 75, 76], label: 'EAB BC Pressure'}
  ];
  public lineChartLabels:Array<any> = ['2/6/2017 10:14:00 PM', '2/6/2017 10:15:00 PM', '2/6/2017 10:16:00 PM', '2/6/2017 10:17:00 PM', '2/6/2017 10:18:00 PM', '2/6/2017 10:19:00 PM', '2/6/2017 10:20:00 PM'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    {  
      backgroundColor: '#FFF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {  
      backgroundColor: '#FFF',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {  
      backgroundColor: '#FFF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
	 {  
      backgroundColor: '#FFF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
	 {  
      backgroundColor: '#FFF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
	 {  
      backgroundColor: '#FFF',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
	
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
}


 
 

