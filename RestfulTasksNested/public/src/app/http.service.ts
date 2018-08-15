import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    console.log("1")
  }
  getTasks(){
    return this._http.get('/tasks');
  }
  getTask(task_id){
    console.log('ID is', task_id);
    return this._http.get('/tasks/'+task_id);
  }
  addTask(newtask){
    return this._http.post('/tasks', newtask);
  }
  deleteTask(task_id){
    console.log('request to delete');
    return this._http.delete('/tasks/'+task_id);
  }
  editTask(editTask){
    console.log('request to edit', editTask._id);
    return this._http.put('/tasks/'+editTask._id, editTask);
  }
}