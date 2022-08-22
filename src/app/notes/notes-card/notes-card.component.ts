import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notes-card',
  templateUrl: './notes-card.component.html',
  styleUrls: ['./notes-card.component.scss']
})
export class NotesCardComponent implements OnInit {

  @Input() title: string;
  @Input() body: string;

  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // child is set
      // If overflow of the text, if not - hide the truncator.
      let style = window.getComputedStyle(this.bodyText.nativeElement, null);
      console.log(style);
      
      let viewAbleHeight= parseInt(style.getPropertyValue("height"), 10);
      
      if(this.bodyText.nativeElement.scrollHeight > viewAbleHeight){
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block')
      }else{
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none')
      }
  
  }


  ngOnInit(): void {
  
  }

}
