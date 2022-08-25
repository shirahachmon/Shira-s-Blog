import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() xButtonClick: EventEmitter<any>= new EventEmitter<any>();
  @Output() cardClick: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  removeBudgetIcon(){
    this.xButtonClick.emit();
  }

  onCardClick(){
    this.cardClick.emit();
  }

}
