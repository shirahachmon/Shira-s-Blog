import { WebRequestsService } from './web-requests.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private webReqService: WebRequestsService) { }

  // Send a web request to create the list.
  createList(title: string): Observable<any>{
    return this.webReqService.post('lists', { title })
  }
}
