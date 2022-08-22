import { Component, OnInit } from '@angular/core';
import {faUserLock, faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  // Importing icons
  faUserLock=faUserLock;
  faSearch=faSearch;

  // Data when calling other component from here
  cardTitle:string= 'some title....'
  cardBody: string= 'body some bodybody some bodybody some body....'


  constructor() { }

  ngOnInit(): void {
  }

}
