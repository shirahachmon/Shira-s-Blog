import { style, transition, trigger, animate, query, stagger} from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  filteredNotes: Note[]= new Array<Note>();

  @ViewChild('filterInput') filterInputElRef: ElementRef<HTMLInputElement>;
  constructor(private notesService: NotesService ) { }

  ngOnInit(): void {
    // We want to retrieve all notes from the notes service.
    this.notes= this.notesService.getAll(); 
    // this.filteredNotes=this.notesService.getAll();

    this.filter('');
  }

  deleteNote(note: Note){
    let noteId= this.notesService.getId(note);
    this.notesService.delete(noteId);
    this.filter(this.filterInputElRef.nativeElement.value);
  }
  
  generateNoteURL(note: Note){
    let noteId= this.notesService.getId(note);
    return noteId;
  }

  filter(query: any){
    query= query.toLowerCase().trim();
    console.log("entered");
    
    let allResults: Note[] = new Array<Note>();
    // Split up the search query into individual words.
    let terms: string[]= query.split(' ');
    // Remove duplicate search terms.
    terms= this.removeDuplicates(terms);
    // Compile all relevant results into the allResults array.
    terms.forEach(term=>{
      let results: Note[]= this.releventsNotes(term);
      // Append results to the allResults array. 
      allResults= [...allResults, ...results] // ES6
    });

    // allResults will include duplicate notes
    // Because a prticular note can be the result of many search terms
    // But we dont want to show the same note multiple times on the UI 
    // So we first must remove the duplicates.

    let uniqueResults= this.removeDuplicates(allResults);
    this.filteredNotes= uniqueResults;

    // Now sort by relevancy.
    this.sortByRelevancy(allResults);
  }

  removeDuplicates(arr: Array<any>) : Array<any>{
    let uniqueResults: Set<any> =new Set<any>;
    arr.forEach(e=> uniqueResults.add(e));

    return Array.from(uniqueResults);
  }

  releventsNotes(query: any): Array<Note>{
    query= query.toLowerCase().trim();
    let releventNotes= this.notes.filter(note=>{
      if(note.title && note.title.toLowerCase().includes(query))
        return true;
      if(note.body && note.body.toLowerCase().includes(query))
      return true;

      return false;
    })
    return releventNotes;
  }

  sortByRelevancy(searchResults: Note[]){
    // This method will calculate the relevancy of a note based on the number of times it appears 
    // In the search results.

    // Format= key: value. 
    let noteCountObj: any= {};

    searchResults.forEach(note=> {
      let noteId= this.notesService.getId(note);

      if(noteCountObj[noteId]){
        noteCountObj[noteId]+=1;
      }else{
        noteCountObj[noteId]=1;
      }
    })

    this.filteredNotes= this.filteredNotes.sort( (a: Note, b: Note) => {
      let aId= this.notesService.getId(a);
      let bId= this.notesService.getId(b);

      let aCount= noteCountObj[aId];
      let bCount= noteCountObj[bId];

      return bCount-aCount;
  })


  }
}
