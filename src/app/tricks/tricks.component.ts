import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-tricks',
  templateUrl: './tricks.component.html',
  styleUrls: ['./tricks.component.css']
})
export class TricksComponent implements OnInit {


  _data: any[] = [    
    {trick: "hi", meaning: ""},
    {trick: "hii", meaning: ""},
    {trick: "hiii", meaning: ""},
    {trick: "hiiii", meaning: ""},
    {trick: "", meaning: ""},
    {trick: "", meaning: ""},
    {trick: "", meaning: ""},
    {trick: "", meaning: ""},
    {trick: "", meaning: ""},
    ]
  
    ngOnInit(): void {
    }
  
    constructor(private _lightbox: Lightbox) {
      }
  
    open(index: number): void {
      this._lightbox.open(this._data, index);
    }
  
    close(): void {
      this._lightbox.close();
    }
    
  
}
