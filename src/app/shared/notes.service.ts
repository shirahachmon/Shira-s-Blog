import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  notes: Note[]= new Array<Note>();

  constructor() { }

  getAll(){
    return this.notes;
  }
  
  get(id: number){
    return this.notes[id];
  }

  getId(note: Note){
    return this.notes.indexOf(note);
  }

  add(note: Note){
    // This method will add a note to the notes array and will return the id 
    // Of the note.
    let newLength= this.notes.push(note);
    return newLength-1;
  }

  update(id: number, title: string, body: string){
    let note= this.notes[id];
    note.title= title;
    note.body=body;
  }

  delete(id: number){
    // start deleting from the given id, and deleting only 1. 
    this.notes.splice(id, 1);
  }
}
