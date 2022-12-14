import { InstegramComponent } from './instegram/instegram.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddItemFormComponent } from './budget-calculator-section/add-item-form/add-item-form.component';
import { GameService } from './shared/game.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DragDropModule} from '@angular/cdk/drag-drop';

// Importing all components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { NotesCardComponent } from './notes/notes-card/notes-card.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { PracticeComponent } from './practice/practice.component';
import { SearchService, TricksComponent } from './tricks/tricks.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { SquareComponent } from './tic-tac-toe/square/square.component';
import { BoardComponent } from './tic-tac-toe/board/board.component';
import { NotesService } from './shared/notes.service';


// Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule } from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';
import {MatDialogModule } from '@angular/material/dialog';
import { DialogAreYouSureComponent } from './dialog-are-you-sure/dialog-are-you-sure.component';
import { KanbanLayoutComponent } from './kanban-layout/kanban-layout.component';
import { BudgetCalculatorComponent } from './budget-calculator-section/budget-calculator/budget-calculator.component';
import { BudgetItemListComponent } from './budget-calculator-section/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-calculator-section/budget-item-list/budget-item-card/budget-item-card.component';
import { TaskViewComponent } from './task-manager/task-view/task-view.component';
import { NewListComponent } from './task-manager/new-list/new-list.component';
import { NewTaskComponent } from './task-manager/new-task/new-task.component';
import { EditListComponent } from './task-manager/edit-list/edit-list.component';
import { EditTaskComponent } from './task-manager/edit-task/edit-task.component';
import { ItunesComponent } from './itunes/itunes.component';
import { NgrxReduxTutorialComponent } from './ngrx-redux-tutorial/ngrx-redux-tutorial.component';
import { StoreModule } from '@ngrx/store';


import { simpleReducer } from './ngrx-redux-tutorial/simple.reducer';
import { postReducer } from './ngrx-redux-tutorial/post.reducer';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PracticeComponent,
    TricksComponent,
    NotesListComponent,
    MainLayoutComponent,
    NotesCardComponent,
    NoteDetailsComponent,
    TicTacToeComponent,
    SquareComponent,
    BoardComponent,
    DialogAreYouSureComponent,
    KanbanLayoutComponent,
    BudgetCalculatorComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent,
    EditListComponent,
    EditTaskComponent,
    InstegramComponent,
    ItunesComponent,
    NgrxReduxTutorialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LightboxModule,
    FontAwesomeModule,
    NgbModule,
    DragDropModule,
    // StoreModule.forRoot({
    //   post: postReducer,
    //   message: simpleReducer
    // }),

    // Material imports
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [GameService, NotesService, SearchService],
  bootstrap: [AppComponent],
  entryComponents:[DialogAreYouSureComponent]
})
export class AppModule { }
