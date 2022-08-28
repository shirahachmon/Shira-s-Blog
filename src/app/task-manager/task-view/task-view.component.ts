import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  createNewList(){
    this.taskService.createList('testing').subscribe((res: any)=>{
      console.log(res)
    })
  }

}
