import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseurl = 'localhost:4200'
  getNumber(){
    return this.http.get(`${this.baseurl}/api/getnum`)
  }
  getWord(){
    return this.http.get(`${this.baseurl}/getword`)
  }
  getList(){
    return this.http.get(`${this.baseurl}/getlist`)
  }
}
