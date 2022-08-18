import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-shira-travilng',
  templateUrl: './shira-travilng.component.html',
  styleUrls: ['./shira-travilng.component.css']
})
export class ShiraTravilngComponent implements OnInit {
  photosUrl= [
    "playavenao-fromabove",
    "niwi-boritaca-colombia",
    "playavenao",
    "playavenao2",
    "sinai-vibing",
    "vibing-in-mexico",
    "sinai",
    "sinai2",
    "sinai3",
    "sinai4",
    "sinai5",
    "colombia",
    "colombia2",
    "playa1",
    "playa2",
    "playa3",
    "beacing",
    "climbing-trees-mexico",
    "dancing",
    "intheroads-playavenao",
    "me-and-stormi-playavenao",
    
    
  ]

  ngOnInit(): void {
  }

  _albums: any = [];
  
  constructor(private _lightbox: Lightbox) {
    for (let i = 0; i < this.photosUrl.length; i++) {
      const src = '/assets/images/' + this.photosUrl[i] + '.jpg';
      const caption = 'Image ' + this.photosUrl[i]+ ' caption';
      const thumb = '/assets/images/thumbs/image' +this.photosUrl[i] + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
    }
  }

  open(index: number): void {
    console.log(index)
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
  


}
