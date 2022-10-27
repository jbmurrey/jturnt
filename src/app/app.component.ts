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
  word:any = '';
  list:any = [];
  getNum(){
    this.api.getNumber().subscribe((res)=>
    {
      this.num = res;
    }
    )
  }
  getWord(){
    this.api.getWord().subscribe((res)=>{
      this.word = res;
    })
  }
  getList(){
    this.api.getList().subscribe((res)=>{
      this.list = res;
    })
  }
  
}
