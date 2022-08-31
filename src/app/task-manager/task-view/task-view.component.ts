import { Task } from './../../shared/task.model';
import { List } from './../../shared/list.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';

import {faTrash, faEdit} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {


  faEdit=faEdit;
  faTrash=faTrash;
  lists: List[];
  tasks: Task[];

  selectedListId: string;
  constructor(private taskService: TasksService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.taskService.getLists().subscribe((lists: List[] ) =>{
      this.lists= lists;


    this.route.params.subscribe(
      (params: Params) =>{
        if(params["listId"]){
          this.selectedListId=params["listId"];
          this.taskService.getTasks(params["listId"]).subscribe((tasks: Task[]) => {
            this.tasks=tasks
          })
        }else{
          this.router.navigate(['/lists', this.lists[0]._id])
          this.selectedListId=this.lists[0]._id;
          this.taskService.getTasks(params["listId"]).subscribe((tasks: Task[]) => {
            this.tasks=tasks
        })
      }
    })
    })

  }

  onTaskClick(task: Task){
    // We want to set the task as completed
    this.taskService.complete(task).subscribe(()=>{
      task.completed= !task.completed;
    })
  }


  onDeleteList(){
    this.taskService.deleteList(this.selectedListId).subscribe((res)=>{
      this.router.navigate(['lists'])
    });
  }

  onTaskDelete(id: string){
    this.taskService.deleteTask(id,this.selectedListId).subscribe((res)=>{
      this.tasks= this.tasks.filter(val=> val._id !== id)
    });
  }
}
