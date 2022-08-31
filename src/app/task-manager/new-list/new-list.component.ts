import { Router } from '@angular/router';
import { TasksService } from './../../shared/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor(private taskService: TasksService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createList(title: string){
    this.taskService.createList(title).subscribe((res: Task)=>{
      // Navigate back to the ui with the id of the list and content.
      this.router.navigate(['/lists', res._id])
    })
  }

}
