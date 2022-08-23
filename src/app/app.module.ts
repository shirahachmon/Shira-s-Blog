import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Importing all components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { NotesCardComponent } from './notes/notes-card/notes-card.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { PracticeComponent } from './practice/practice.component';
import { TricksComponent } from './tricks/tricks.component';
import { SummaryComponent } from './summary/summary.component';
import { TripComponent } from './trip/trip.component';


// Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule } from '@angular/material/input';
import {MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PracticeComponent,
    TricksComponent,
    SummaryComponent,
    TripComponent,
    NotesListComponent,
    MainLayoutComponent,
    NotesCardComponent,
    NoteDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

    LightboxModule,
    FontAwesomeModule,
    NgbModule,

    // Material imports
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
