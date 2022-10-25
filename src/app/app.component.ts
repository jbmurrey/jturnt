import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private api:ApiService){}
  num:any = '';
  word:string = '';
  list:any = [];
  getNum(){
    this.num = 10;
  }
  getWord(){
    this.word = 'hello';
  }
  getList(){
    this.list[0] = 'ye west';
    this.list[1] = 'yo';
  }
  
}
