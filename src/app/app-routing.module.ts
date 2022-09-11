import { EditListComponent } from './task-manager/edit-list/edit-list.component';
import { NewTaskComponent } from './task-manager/new-task/new-task.component';
import { NewListComponent } from './task-manager/new-list/new-list.component';
import { TaskViewComponent } from './task-manager/task-view/task-view.component';
import { BudgetCalculatorComponent } from './budget-calculator-section/budget-calculator/budget-calculator.component';
import { KanbanLayoutComponent } from './kanban-layout/kanban-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { PracticeComponent } from './practice/practice.component';
// import { SummaryComponent } from './summary/summary.component';
import { BoardComponent } from './tic-tac-toe/board/board.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { TricksComponent } from './tricks/tricks.component';
import { EditTaskComponent } from './task-manager/edit-task/edit-task.component';
import { InstegramComponent } from './instegram/instegram.component';
import { ItunesComponent } from './itunes/itunes.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'instagram',
    component: InstegramComponent
},
// {
//     path: 'summary',
//     component: SummaryComponent
// },
// {
//     path: 'practice',
//     component: PracticeComponent
// },
// {
//     path: 'tricks',
//     component: TricksComponent
// },
{
  path: 'itunes',
  component: ItunesComponent
},
{
    path: 'notes',
    component: MainLayoutComponent,
    children:[
        {path: '',
        component: NotesListComponent
        },
        //Dynamic root with an id
        {path: ':id',
        component: NoteDetailsComponent
        },
        {path: 'new',
        component: NoteDetailsComponent
        }
    ]
},
{
    path: 'tic-tac-toe',
    component: TicTacToeComponent
},
{
    path: 'kanban-layout',
    component: KanbanLayoutComponent
},
{
    path: 'budget-calculator',
    component: BudgetCalculatorComponent
},
{
    path: 'task-manager',
    redirectTo: '/lists',
    pathMatch: 'full'
},
{ path: 'new-list', component: NewListComponent},
{ path: 'edit-list/:listId', component: EditListComponent},
{ path: 'lists/:listId/edit-task/:taskId', component: EditTaskComponent},
{ path: 'lists', component: TaskViewComponent},
{ path: 'lists/:listId', component: TaskViewComponent},
{ path: 'lists/:listId/new-task', component: NewTaskComponent},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
