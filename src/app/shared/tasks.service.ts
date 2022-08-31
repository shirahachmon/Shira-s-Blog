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


  getLists() :Observable<any>{
    return this.webReqService.get('lists');
  }

  // Send a web request to create the list.
  createList(title: string): Observable<any>{
    return this.webReqService.post('lists', { title })
  }

  getTasks(listId: string): Observable<any>{
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  // Send a web request to create the task.
  createTask(title: string, listId: string): Observable<any>{
    return this.webReqService.post(`lists/${listId}/tasks`, { title })
  }

  complete(task: Task){
    return this.webReqService.patch(`lists/${task.listId}/tasks/${task._id}`, {
      completed: !task.completed
    })
  }

}
