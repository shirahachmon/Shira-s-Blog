import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ShiraTravilngComponent } from './shira-travilng/shira-travilng.component';
import { SolvingJsProblemsComponent } from './home/solving-js-problems/solving-js-problems.component';
import { CheetsheetComponent } from './home/cheetsheet/cheetsheet.component';
import { TricksInJsComponent } from './home/tricks-in-js/tricks-in-js.component';
import { AppBootstrapModule } from './appBootStrap.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LightboxModule } from 'ngx-lightbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ShiraTravilngComponent,
    SolvingJsProblemsComponent,
    CheetsheetComponent,
    TricksInJsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    LightboxModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
