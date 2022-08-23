import { Component, OnInit } from '@angular/core';
import {faUserLock, faSearch} from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
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
  // cardTitle:string= 'some title....'
  // cardBody: string= 'body some bodybody some bodybody some body....'

  notes: Note[]= new Array<Note>();

  constructor(private notesService: NotesService ) { }

  ngOnInit(): void {
    // We want to retrieve all notes from the notes service.
    this.notes= this.notesService.getAll(); 
  }

  deleteNote(id: number){
    this.notesService.delete(id);
  }
}
