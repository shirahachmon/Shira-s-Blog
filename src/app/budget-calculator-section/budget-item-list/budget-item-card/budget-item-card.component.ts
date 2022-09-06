import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { outputAst } from '@angular/compiler';
import { BudgetItemsService } from 'src/app/shared/budget-item.service';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent{


  constructor(private budgetService: BudgetItemsService){}

  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any>= new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any>= new EventEmitter<any>();


  removeBudgetIcon(){
    this.xButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }

}
