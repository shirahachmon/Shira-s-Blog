import { style, transition, trigger, animate, query, stagger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {faUserLock, faSearch} from '@fortawesome/free-solid-svg-icons';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      // Entry animation
      transition('void => *', [
        // Initial state
        style({
          height:0,
          opacity:0,
          transform: 'scale(0.85)', 
          'margin-bottom' :0,

          // We have to expend out the padding properties.
          paddingTop:0,
          paddingBotton:0,
          paddingRight:0,
          paddingLeft:0,
        }),

        // We first want to animate the spacing (which includes height and margin)
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop :'*',
          paddingBottom :'*',
          paddingRight :'*',
          paddingLeft :'*',
        })),
        animate(200)
      ]),
      transition('* => void', [
        // First scale up
        animate(50, style({
          transform: 'scale(1.05)'
        })), 
        // Then scale down  back to normal size while beginning to fade out.
        animate(50, style({
          transform: 'scale(1)', 
          opacity: 0.75
        })),
        // Scale down and fade out comletely
        animate('120ms ease-out', style({
          transform: 'scale(0.68)', 
          opacity:0
        })), 
        animate('150ms ease-out', style({
          height: 0,
          'margin-bottom': 0,
          paddingTop :0,
          paddingBottom :0,
          paddingRight :0,
          paddingLeft :0,
        }))
      ])

    ]),

  trigger('listAnim', [
    transition('* => *', [
      query(':enter', [
        style({
          opacity:0,
          height:0
        }),
        stagger(100, [
          animate('0.2s ease')
        ])
      ],{ optional: true
      })
    ] )
  ])
  ]
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
