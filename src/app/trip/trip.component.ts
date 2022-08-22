import { Component, HostListener, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import * as exportData from 'src/assets/exportData.json'
import {faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
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



  // open(index: number): void {
  //   this._lightbox.open(this._albums, index);
  // }

  // close(): void {
  //   this._lightbox.close();
  // }

  // images:any= [
  //   { Panama: [
  //     {src: "/assets/images/playavenao-fromabove.jpg"},
  //     {src: "/assets/images/playavenao.jpg"},
  //     {src: "/assets/images/playavenao2.jpg"},
  //     {src: "/assets/images/playa1.jpg"},
  //     {src: "/assets/images/playa2.jpg"},
  //     {src: "/assets/images/intheroads-playavenao.jpg"},
  //     {src: "/assets/images/me-and-stormi-playavenao.jpg"},
  //     {src: "/assets/images/playa3.jpg"},
  //     {src: "/assets/images/beacing.jpg"},
  // ]},{Sinai: [
  //   {src: "/assets/images/sinai.jpg"},
  //   {src: "/assets/images/sinai2.jpg"},
  //   {src: "/assets/images/sinai3.jpg"},
  //   {src: "/assets/images/sinai4.jpg"},
  //   {src: "/assets/images/sinai5.jpg"},
  //   {src: "/assets/images/sinai-vibing.jpg"},
  //   {src: "/assets/images/dancing.jpg"},
  // ]}, {Colombia: [
  //   {src: "/assets/images/niwi-boritaca-colombia.jpg"},
  //   {src: "/assets/images/colombia.jpg"},
  //   {src: "/assets/images/colombia2.jpg"},
  // ]}, {Mexico: [
  //   {src: "/assets/images/climbing-trees-mexico.jpg"},
  //   {src: "/assets/images/vibing-in-mexico.jpg"},
  // ]}];
