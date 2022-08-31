import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from './../../shared/task.model';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  listId: string;

  constructor(private TasksService: TasksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        this.listId= params['listId'];
      });
  }

  createTask(title: string){
    this.TasksService.createTask(title, this.listId).subscribe((newTask: Task)=>{
      this.router.navigate(['../'], { relativeTo: this.route} )
    })
  }
}
