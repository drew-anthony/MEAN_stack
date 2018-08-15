import { Component} from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tasks: any;
  task = [];
  id = '';
  newTask: any;
  editTask = [];
  showEditForm = false;
  self = this;

  constructor(private _httpService: HttpService){}
   ngOnInit(){
      this.newTask = {title: "", description: ""}
   }
  tasksOnClick(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data;
      console.log("Got our tasks!", this.tasks)
    })
  }
  taskToShow(task_id){
    this.task = [];
    let observable = this._httpService.getTask(task_id);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.tasksOnClick();
    })
  }
  editOnClick(task){
    console.log("Task we need to edit", task._id);
    console.log("Task to edit", task, "Task title", task.title);
    task.showEditForm = true;
  }
  onSubmit(){
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.newTask = {title: "", description: ""}
      this.tasksOnClick();
    })
  }
  onDelete(task_id){
    let observable = this._httpService.deleteTask(task_id);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      this.tasksOnClick();
    })
  }
  onEdit(editTask){
    editTask.showEditForm = false;
    console.log("Edit the task", editTask._id)
    let observable = this._httpService.editTask(editTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
    })
  }
}