import { Task } from './../../shared/task.model';
import { List } from './../../shared/list.model';
import { ActivatedRoute, Params } from '@angular/router';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  lists: List[];
  tasks: Task[];

  constructor(private taskService: TasksService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskService.getLists().subscribe((lists: List[] ) =>{
      this.lists= lists;
    })

    this.route.params.subscribe(
      (params: Params) =>{
        this.taskService.getTasks(params["listId"]).subscribe((tasks: Task[]) => {
          this.tasks=tasks
        })
    })
  }

  onTaskClick(task: Task){
    // We want to set the task as completed
    this.taskService.complete(task).subscribe(()=>{
      task.completed= !task.completed;
    })
  }
}
