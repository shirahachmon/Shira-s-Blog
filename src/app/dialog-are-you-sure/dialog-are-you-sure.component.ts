import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-are-you-sure',
  templateUrl: './dialog-are-you-sure.component.html',
  styleUrls: ['./dialog-are-you-sure.component.scss']
})
export class DialogAreYouSureComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any)  { }

  ngOnInit(): void {
  }

}
