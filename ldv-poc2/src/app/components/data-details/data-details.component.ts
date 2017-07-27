import { Component, OnInit,ViewChild  } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {
 data: any;  
 ckB:any;
fileData :any;
 hideDetails:boolean=true;
 showTable:boolean=false;
 public filterQuery = "";
    public rowsOnPage = 5;
    public sortBy = "email";
    public sortOrder = "asc";

@ViewChild('fileInput') myFileInput: any;
  
  constructor(private http: Http,private dataService: DataService) { 

  this.hideDetails=true;
     this.showTable=false;
      
	   console.log(this.fileData);
		 }
		
		 
  ngOnInit() {
  this.dataService.getServiceDataGET("assets/tableData.json")
            .subscribe(data=> this.data=data);

  this.fileData=this.dataService.getServiceDataGET("api/ldv")
  .subscribe(data=>this.fileData=data);

  }
  
 

 removeUloadedFile()
 {
     //console.log(this.myFileInput.nativeElement.files);
     this.myFileInput.nativeElement.value="";
     console.log(this.ckB);

 }
 
 getTable()
 {
     this.hideDetails=false;
     this.showTable=true;
 }

 hideTable()
 {
      this.hideDetails=true;
     this.showTable=false;
 }
  
 fileUpload(event) { 
    let fileList: FileList = event.target.files;
      console.log(this.ckB);
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        formData.append('fileType', this.ckB);
        console.log(formData);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post("api/locoData", formData,headers)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}

}
