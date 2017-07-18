import { Component, OnInit,ViewChild  } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.css']
})
export class DataDetailsComponent implements OnInit {
 data: any;  
 fileData :any;
 hideDetails:boolean=true;
 showTable:boolean=false;
 public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

@ViewChild('fileInput') myFileInput: any;
  
  constructor(private http: Http) { 
  this.hideDetails=true;
     this.showTable=false;
       this.fileData=this.getData().subscribe(data=>this.fileData=data);
	   console.log(this.fileData);
		 }
		
		 
  ngOnInit() {
 this.http.get("assets/tableData.json")
  .map((response: Response) => response.json())
            .subscribe(data=> {
                this.data = data
            });
  }
  
  getData()
  {
	  return this.http.get("api/ldv")
                         .map((response: Response) => response.json());
  }
 removeUloadedFile()
 {
     //console.log(this.myFileInput.nativeElement.files);
     this.myFileInput.nativeElement.value="";
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
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        //let options = new RequestOptions({ headers: headers });
       /* this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )*/
    }
}

}
