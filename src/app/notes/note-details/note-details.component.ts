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


  currentNote: Note;
  new: boolean;

  constructor(private noteService: NotesService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    // We want to find out if we are creating new note or updating existing one.
    this.route.params.subscribe((params: Params) => {
      this.currentNote= new Note();
      if(params['id'] && params['id']!="new" ){
        this.noteService.getNote(params['id']).subscribe((note: Note)=>{
          this.currentNote=note;
        })
        this.new=false;
      }else{
        this.new=true;
      }})
  }

  onSubmit(form: NgForm){
    if(this.new){
      this.noteService.createNote(form.value.title ,form.value.body).subscribe((newNote: Note)=>{
          this.noteService.notes.push(newNote);
          this.router.navigateByUrl('/notes');
        });
    }else{
      this.noteService.updateNote(this.currentNote._id, form.value.title ,form.value.body ).subscribe((newNote: Note)=>{
        // this.noteService.notes.push(newNote);
        this.router.navigateByUrl('/notes');
      });
    }}

  cancel(){
    this.router.navigateByUrl('/notes');
  }
}
