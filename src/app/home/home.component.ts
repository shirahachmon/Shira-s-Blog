import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
   trigger('fade', [
      transition('void => *', [
        style({opacity: 0.1}),
        animate(500, style({opacity: 1}))
      ]),
      transition('* => void', [
        style({opacity: 0.9}),
        animate(500, style({opacity: 0}))
      ])
    ])
  ]})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.homeImages[0].active=true;
  }

  homeImages: any[] =[
    {src: '/assets/images/homepagepicture.jpg', alt: "Standing In Panama Roads", active: false },
    {src: '/assets/images/playavenao2.jpg', alt: "Walking On The Beach" , active:false},
    {src: '/assets/images/colombia.jpg', alt: "Siera Minca" , active:false}];
 
    key:any;


    // Built host listener for capture all key press on the key board, 
    // So that we can move to other images in component within a key press on the Enter. 
    @HostListener('document:keypress', ['$event'])    
    handleKeyboardEvent(event: KeyboardEvent) {
      // Gives all except -> and <-. Why? Problem- has to solve this....
      this.key = event.key;
      if(this.key=="Enter") this.next();
    }


  // Move to the next image in the array.
  next(){
    const index = this.homeImages.findIndex(img => {
      return img.active === true
    });
    this.homeImages[index].active= false;
    if(this.homeImages.length-1===index) this.homeImages[0].active=true;
    else this.homeImages[index+1].active=true;
  }

  // Move to the previous image in the array.
  prev(){
    const index = this.homeImages.findIndex(img => {
      return img.active === true
    }); 
    this.homeImages[index].active=false;
     if(index===0) this.homeImages[this.homeImages.length-1].active=true;
    else this.homeImages[index-1].active=true;
  }
}





