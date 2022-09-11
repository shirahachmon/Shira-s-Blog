import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note.model';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private webReqService: WebRequestsService) { }
  notes: Note[]= new Array<Note>();


  //---------------------------------------------------------------------//
  // NOTES crud operators.
  //---------------------------------------------------------------------//

  // Get all notes from db.
  getNotes() :Observable<any>{
    return this.webReqService.get('notes');
  }

  getNote(id: string): Observable<any>{
    return this.webReqService.get(`notes/${id}`);
  }

  // Send a web request to create the note.
  createNote(title: string, body: string): Observable<any>{
    return this.webReqService.post('notes', { title, body })
  }

  // Update a note by his id.
  updateNote(id: string, title: string, body: string): Observable<any>{
    return this.webReqService.patch(`notes/${id}`, { title, body })
  }

  // Delete a note by his id.
  deleteNote(id: string){
    return this.webReqService.delete(`notes/${id}`)
  }

  // getId(note: Note){
  //   return this.notes.indexOf(note);
  // }
}
