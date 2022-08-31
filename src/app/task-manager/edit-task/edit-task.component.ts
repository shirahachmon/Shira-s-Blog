import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private taskservice: TasksService,
    private router: Router) { }

  taskId: string;
  listId:string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        if(params["taskId"] && params["listId"]){
          this.listId=params["listId"];
          this.taskId=params["taskId"];
        }
    })
  }

  updateTask(title: string){
    this.taskservice.updateTask(this.listId, this.taskId, title).subscribe(()=>{
      this.router.navigate(['/lists', this.listId])
    })
  }

}
