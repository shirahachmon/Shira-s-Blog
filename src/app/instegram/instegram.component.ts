
  import { Component, HostListener, OnInit } from '@angular/core';
  import { Lightbox } from 'ngx-lightbox';
  import * as exportData from 'src/assets/exportData.json'
  import {faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-instegram',
  templateUrl: './instegram.component.html',
  styleUrls: ['./instegram.component.scss']
})
export class InstegramComponent implements OnInit {

    constructor(private _lightbox: Lightbox) {
    }

      @HostListener('document:keypress', ['$event'])
      handleKeyboardEvent(event: KeyboardEvent) {
        // Gives all except -> and <-. Why? Problem- has to solve this....
        if(event.key=="Enter") this.nextImageInPlace();
      }

      faInstagram=faInstagram;
    // Gives all data from the ts file.
    exportedData:any= exportData;

    // Here will be all images including all places.
    allImages:any;

    // Index of all images array. Indicate place.
    shownIndexPlace:number= 0;

    // Array of all  shown images depending on place.
    shownImages: any;

    currentPlace: any;

    currentIndexInPlace:number= 0;

    ngOnInit(): void {
      this.allImages=this.exportedData.images;
      this.shownImages = Object.values(this.allImages[this.shownIndexPlace])[0]
      this.currentPlace=Object.keys(this.allImages[this.shownIndexPlace]);
    }

    nextImageInPlace(){
      if(this.currentIndexInPlace===this.shownImages.length-1) this.currentIndexInPlace=0;
      else this.currentIndexInPlace++;
    }

    prevImageInPlace(){
      if(this.currentIndexInPlace===0) this.currentIndexInPlace= this.shownImages.length-1;
      else this.currentIndexInPlace--;
    }

    nextPlace(){
      this.currentIndexInPlace=0;
      if(this.shownIndexPlace== this.allImages.length-1) this.shownIndexPlace=0;
      else this.shownIndexPlace++;
      this.shownImages = Object.values(this.allImages[this.shownIndexPlace])[0]
      this.currentPlace=Object.keys(this.allImages[this.shownIndexPlace]);
    }
  }
