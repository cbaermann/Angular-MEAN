import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getTasksById(id:string){
    return this._http.get("/tasks/:id");
  }
  createTask(newtask){
    return this._http.post('/tasks', newtask);
  }
  editTask(editTask){
    return this._http.put(`/tasks/${editTask._id}`, editTask);
  }
  deleteTask(task){
    return this._http.delete(`/tasks/${task._id}`, task);
  }
}
