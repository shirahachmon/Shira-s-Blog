import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LightboxModule } from 'ngx-lightbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PracticeComponent } from './practice/practice.component';
import { TricksComponent } from './tricks/tricks.component';
import { SummaryComponent } from './summary/summary.component';
import { TripComponent } from './trip/trip.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PracticeComponent,
    TricksComponent,
    SummaryComponent,
    TripComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    MatCardModule,
    MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
