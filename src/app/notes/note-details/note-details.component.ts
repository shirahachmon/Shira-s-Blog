import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {


  note: Note;
  noteId: number;
  new: boolean;

  constructor(private noteService: NotesService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    // We want to find out if we are creating new note or updating existing one.
    this.route.params.subscribe((params: Params) => {
      this.note= new Note();
      if(params['id'] && params['id']>=0){
        this.note= this.noteService.get(params['id'])
        this.noteId=params['id'];
        this.new=false;
      }else{
        this.new=true;
      }
    })
    
  }

  onSubmit(form: NgForm){
    if(this.new){
      // we should save the note
      this.noteService.add(form.value);
      this.router.navigateByUrl('/notes');  
    }else{
      // Update note
      this.noteService.update(this.noteId, form.value.title, form.value.body)
      this.router.navigateByUrl('/notes');  
    }
    }

  cancel(){
    this.router.navigateByUrl('/notes');
  }

}
