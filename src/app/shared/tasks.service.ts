import { Task } from './task.model';
import { WebRequestsService } from './web-requests.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './list.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webReqService: WebRequestsService) { }


  //---------------------------------------------------------------------//
  // LISTS crud operators.
  //---------------------------------------------------------------------//

  // Get all lists from db.
  getLists() :Observable<any>{
    return this.webReqService.get('lists');
  }

  // Send a web request to create the list.
  createList(title: string): Observable<any>{
    return this.webReqService.post('lists', { title })
  }

  // Update a list byh his id.
  updateList(id: string, title: string): Observable<any>{
    return this.webReqService.patch(`lists/${id}`, { title })
  }

  // Delete a list by his id.
  deleteList(id: string){
    return this.webReqService.delete(`lists/${id}`)
  }

  //---------------------------------------------------------------------//
  // TASKS crud operators.
  //---------------------------------------------------------------------//

  // Get all tasks from the db.
  getTasks(listId: string): Observable<any>{
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  // Update task by his id and his list id.
  updateTask(listId: string, taskId: string, title: string): Observable<any>{
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`, { title })
  }

  // Send a web request to create the task.
  createTask(title: string, listId: string): Observable<any>{
    return this.webReqService.post(`lists/${listId}/tasks`, { title })
  }

  // Delete a task by his id.
  deleteTask(id: string, listId:string){
    return this.webReqService.delete(`lists/${listId}/tasks/${id}`)
  }

  // Update a task if completed or uncompleted.
  complete(task: Task){
    return this.webReqService.patch(`lists/${task.listId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }


}
