import { Component, OnInit } from '@angular/core';
import {faUserLock, faSearch} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  faUserLock=faUserLock;
  faSearch=faSearch;


  constructor() { }

  ngOnInit(): void {
  }

}
