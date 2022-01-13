import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Task } from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string;
  private httpClient: HttpClient;

  private httpOptions = {
    
    headers: new HttpHeaders( {'Content-Type': 'application/json'} )

  }

  constructor(httpClient: HttpClient) {

    this.apiUrl = "http://localhost:5000/tasks";
    this.httpClient = httpClient;

  }

  getTasks(): Observable<Task[]> {
    
    return this.httpClient.get<Task[]>(this.apiUrl);

  }

  deleteTask(task: Task): Observable<Task> {

    const apiUrlTask: string = `${this.apiUrl}/${task.id}`;

    return this.httpClient.delete<Task>(apiUrlTask);

  }

  updateTaskReminder(task: Task): Observable<Task> {

    const apiUrlTask: string = `${this.apiUrl}/${task.id}`;

    return this.httpClient.put<Task>(apiUrlTask, task, this.httpOptions);

  }

  addTask(aNewTask: Task): Observable<Task> {
    
    return this.httpClient.post<Task>(this.apiUrl, aNewTask, this.httpOptions);

  }

}
