import { Board } from './../shared/board.model';
import { Component} from '@angular/core';
import {CdkDragDrop,
       moveItemInArray,
      transferArrayItem} from '@angular/cdk/drag-drop';
import { Column } from '../shared/column.model';

@Component({
  selector: 'app-kanban-layout',
  templateUrl: './kanban-layout.component.html',
  styleUrls: ['./kanban-layout.component.scss']
})
export class KanbanLayoutComponent {


  // Using the board class(model).
board: Board= new Board('Test Board', [
  new Column('Ideas', [
    "Mabye go play tennis",
    "Be a nails mayker",
    "Create a facebook application",
    "Go to rest",
  ]),new Column('Research', [
    "Mabye go play tennis",
    "Be a nails mayker",
    "Create a facebook application",
    "Go to rest",
  ]),new Column('Todo', [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ]),new Column('done', [
    "Create a facebook application"
  ])
])


// Drop cdk on another category.
  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
