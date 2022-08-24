import { DialogAreYouSureComponent } from './../../dialog-are-you-sure/dialog-are-you-sure.component';
import { Component, ElementRef, Input, OnInit, Output, Renderer2,EventEmitter, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent{

  @Input() title: string;
  @Input() body: string;
  @Input() link: string;

  @Output('delete') deleteEvent: EventEmitter<void>= new EventEmitter<void>();


  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2,
              public dialog: MatDialog
    ) { }

  ngAfterViewInit() {
    // child is set
      // If overflow of the text, if not - hide the truncator.
      let style = window.getComputedStyle(this.bodyText.nativeElement, null);

      let viewAbleHeight= parseInt(style.getPropertyValue("height"), 10);

      if(this.bodyText.nativeElement.scrollHeight > viewAbleHeight){
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block')
      }else{
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none')
      }

  }

  onXButtonClick(){
    let dialogRef= this.dialog.open(DialogAreYouSureComponent,
       {data: {name: "shira hachmon"},
        height: '20vh',
        width:'60vh',
        // More options like those:
        maxWidth: '100vw', //overrides default width of dialog
        maxHeight: '100vh', //overrides default height of dialog
        disableClose: true //disables closing on clicking outside box. You will need to make a dedicated button to close
      });


    dialogRef.afterClosed().subscribe(result=> {
      if(result=="false") this.deleteEvent.emit();
    })

  }

}
