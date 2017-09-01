import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


declare var google: any;
@Component({
  selector: 'app-map-child',
  templateUrl: './map-child.component.html',
  styleUrls: ['./map-child.component.css']
})
export class MapChildComponent implements OnInit,OnChanges {
 //google :any;

 position:Array<any>=[];
 graphPosition:any;
  @Input() latPosition: 12.989654;
 @Input() longPosition: 77.730852;
 lat:number;
 lng:number;
 //mapOptions:any;
 //map:any;

  
  // initial center position for the map

    
  
  constructor() { 
    this.lat =12.989654;
 this.lng = 77.730852;
  }

  ngOnInit() {

     
    /* console.log("initi");
      var map = new google.maps.Map(document.getElementById('map'), mapOptions)
      var mapOptions = {
zoom: 15,

center: new google.maps.LatLng(12.971919, 77.596157),
 mapTypeId: google.maps.MapTypeId.ROADMAP
};

var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 12.971919, lng: 77.596157},
          map: map,
          icon: image
        });*/
  }
   

  
  

  ngOnChanges()
  {
     if(this.latPosition && this.longPosition)
      {
        this.lat =this.latPosition;
 this.lng = this.longPosition;
 console.log(this.latPosition);
      }
    
  /*{
    if(this.mapPosition)
      {
console.log(this.mapPosition);
      
  
    console.log("abc");

  }*/

}
 
}