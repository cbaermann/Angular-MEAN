import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTasksById("1");
    
    
  }
  getTasks(){
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log("Got out tasks!", data));
  }
  getTasksById(id:string){
    let tempObservable = this._http.get('/tasks/:id');
    tempObservable.subscribe(data => console.log("Got task Id", data));
  }

  deleteTask(task){
    let tempObservable = this._http.delete('/tasks/:id');
    tempObservable.subscribe(data => console.log("deleting task", data, task));
  }
}

