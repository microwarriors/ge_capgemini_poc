import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Injectable()
export class DataService {

  constructor(private http: Http) {

   }

getServiceDataGET(url)
{
  return this.http.get(url)
                         .map((response: Response) => response.json());
}
getServiceDataPOST(url,data)
{
return  this.http.post("url",data)
                         .map((response: Response) => response.json());
}
}
