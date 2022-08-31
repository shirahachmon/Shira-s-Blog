import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: any[];
  tasks: any[];

  constructor(private taskService: TasksService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.taskService.getTasks(params["listId"]).subscribe((tasks: any[]) => {
          console.log(tasks)
          this.tasks=tasks;
        })

    });

    this.taskService.getLists().subscribe((lists: any)=>{
      this.lists= lists;
    })

  }

}
