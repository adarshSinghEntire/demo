import { Component } from '@angular/core';
import { DRP_CONFIG } from './common-drp/common-dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  configuration!:DRP_CONFIG;
  configuration2!:DRP_CONFIG;

  selecteddData:any;
  selecteddData2:any;


  constructor(){
    this.configuration = {
      API: 'https://jsonplaceholder.typicode.com/todos',
      BINDBY: "title",
      PLACEHOLDER: 'Customer No',
      REQUIRED: true
    }

    this.configuration2 = {
      API: 'https://jsonplaceholder.typicode.com/comments',
      BINDBY: "email",
      PLACEHOLDER: 'email',
      REQUIRED: false
    } 

    this.selecteddData = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    }

    this.selecteddData2 = {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
  }


  getData1(data:any){
    console.log(data);
  }
  getData2(data:any){
    console.log(data);
  }

}
