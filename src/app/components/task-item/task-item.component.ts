import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task, UNINITIALIZED_TASK } from "../../Task";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()
  task: Task;

  @Output()
  onDeleteTask: EventEmitter<Task>;

  @Output()
  onToggleReminder;

  faTimes = faTimes;

  constructor(){ 
    this.task = UNINITIALIZED_TASK;
    this.onDeleteTask = new EventEmitter();
    this.onToggleReminder = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onDelete(aTask: Task){
    
    this.onDeleteTask.emit(aTask);
    
  }

  onToggle(aTask: Task) {
    
    this.onToggleReminder.emit(aTask);
    
  }

}
