import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-item-model',
  templateUrl: './edit-item-model.component.html',
  styleUrls: ['./edit-item-model.component.scss']
})
export class EditItemModelComponent implements OnInit {


  @Input() item: BudgetItem;

  constructor() { }

  ngOnInit(): void {
  }

  onsubmitted(updateItem: BudgetItem){

  }

}
