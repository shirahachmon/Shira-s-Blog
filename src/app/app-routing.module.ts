import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { PracticeComponent } from './practice/practice.component';
import { SummaryComponent } from './summary/summary.component';
import { TricksComponent } from './tricks/tricks.component';
import { TripComponent } from './trip/trip.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'trip',
    component: TripComponent
},
{
    path: 'summary',
    component: SummaryComponent
},
{
    path: 'practice',
    component: PracticeComponent
},
{
    path: 'tricks',
    component: TricksComponent
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
