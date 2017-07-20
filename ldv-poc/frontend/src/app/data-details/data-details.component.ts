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
 ckB:any;

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
<<<<<<< HEAD
        console.log("file--------------->");
        console.log(file);
        let formData = new FormData();
        console.log("formData--------------->");
        console.log(formData);
        formData.append('uploadFile', file);
    
=======
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
         formData.append('fileType', this.ckB);
         console.log(formData);
<<<<<<< HEAD
>>>>>>> aa2ecdefc3e898abfc0591f90c5774098b8f3941
=======
>>>>>>> branch 'master' of https://github.com/microwarriors/ge_capgemini_poc.git
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        console.log("headers--------------->");
        console.log(headers);
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
