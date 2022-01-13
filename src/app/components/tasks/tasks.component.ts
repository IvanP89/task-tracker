import { Component, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  private taskService: TaskService;

  constructor(taskService: TaskService){

    this.tasks = [];
    this.taskService = taskService;

  }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe( (returnedTasks) => {
      this.tasks = returnedTasks;
    } );

  }

  deleteTask(aTask: Task) {
    
    this.taskService.deleteTask(aTask).subscribe( () => {

      this.tasks = this.tasks.filter( t => t.id !== aTask.id );

    } );

  }

  toggleReminder(aTask: Task) {

    aTask.reminder = !aTask.reminder;
    this.taskService.updateTaskReminder(aTask).subscribe();

  }

  addTask(aNewTask: Task) {

    this.taskService.addTask(aNewTask).subscribe( aNewTask => this.tasks.push(aNewTask) );

  }

}
