import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  createList(title: string){
    this.taskService.createList(title).subscribe((res: any)=>{
      // Navigate back to the ui with the id of the list and content.

    })
  }

}
