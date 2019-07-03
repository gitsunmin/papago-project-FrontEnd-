import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  httpHeader:HttpHeaders = new HttpHeaders({
    responseType:'text'
  })
  
  doTranslation(source:string, target:string, text:string){
    return this._http
    .get("https://c.javajs.net/translation/"+source+"/"+target+"/"+text,{responseType:'text'});
  }

  getList(){
    return this._http.get("https://c.javajs.net/translations");
  }





}
