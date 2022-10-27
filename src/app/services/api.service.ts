import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  baseurl = 'https://localhost:7194/api/jon'
  getNumber(){
    return this.http.get(`${this.baseurl}/getnum`)
  }
  getWord(){
    return this.http.get(`${this.baseurl}/getword`,{responseType:"text"})
  }
  getList(){
    return this.http.get(`${this.baseurl}/getlist`)
  }
  
}
