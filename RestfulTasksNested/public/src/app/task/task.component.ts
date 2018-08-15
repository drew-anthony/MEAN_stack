import { Component, Input, OnInit } from '@angular/core'; // add Input to our imports

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() showTask: any;  // use the @Input decorator to indicate this comes from the parent
  constructor() { }
  ngOnInit() { }
}
