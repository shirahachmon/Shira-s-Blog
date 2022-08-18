import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheetsheetComponent } from './home/cheetsheet/cheetsheet.component';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolvingJsProblemsComponent } from './home/solving-js-problems/solving-js-problems.component';
import { TricksInJsComponent } from './home/tricks-in-js/tricks-in-js.component';
import { ShiraTravilngComponent } from './shira-travilng/shira-travilng.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
    path: 'trip',
    component: ShiraTravilngComponent
},
{
    path: 'summary',
    component: CheetsheetComponent
},
{
    path: 'practice',
    component: SolvingJsProblemsComponent
},
{
    path: 'tricks',
    component: TricksInJsComponent
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
