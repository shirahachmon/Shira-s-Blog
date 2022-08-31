import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TasksService } from 'src/app/shared/tasks.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskservice: TasksService,
    private router: Router) { }

  listId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) =>{
        if(params["listId"]){
          this.listId=params["listId"];
        }
    })
  }

  updateList(title: string){
    this.taskservice.updateList(this.listId, title).subscribe(()=>{
      this.router.navigate(['/lists', this.listId])
    })
  }

}
