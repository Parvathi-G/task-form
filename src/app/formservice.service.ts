import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './wizard/Data';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {

  private apiurl="http://localhost:3000/data"
  constructor(private _http:HttpClient) { }

  addData(data:Data){
    return this._http.post(this.apiurl,data)
    }
}
