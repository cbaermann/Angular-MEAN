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
  newTask: any;
  editTask: any;
  selectedTask: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    // this.getTasksFromService();
    this.newTask = {title: "", description: ""}
    
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['task'];
      console.log(this.tasks);
    });
  }
  showTask(task){
    this.selectedTask = task;
  }
  onSubmit(){
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""};
    })
  }

  onEdit(){
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("Updated our task", data);
      this.getTasksFromService();
    })
  }
    taskForm(task){
    this.editTask = task;
  }
  onDelete(task){
    let observable = this._httpService.deleteTask(task);
    observable.subscribe(data => {
      console.log("Deleted our task", data),
      this.getTasksFromService();
    })
  }

  }

