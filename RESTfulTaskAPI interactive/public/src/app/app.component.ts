import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  tasks = [];
  something = ""
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['task'];
      console.log(this.tasks);
    });
  }
  info(task){
    console.log(task);
    this.something = task;
    
  }

  }

