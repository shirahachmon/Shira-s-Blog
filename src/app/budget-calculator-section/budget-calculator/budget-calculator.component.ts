import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.scss']
})
export class BudgetCalculatorComponent implements OnInit {

  budgetItems: BudgetItem[]= new Array<BudgetItem>();
  budgetSum: number=0;
  constructor() { }

  ngOnInit(): void {
  }

  getSum(){
    return this.budgetItems.reduce((sum, item) =>{
         return sum+=item.amount
    },0)}

  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);

    this.budgetSum= this.getSum()
  }


  deleteItem(item: BudgetItem){
    let index= this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1)
    this.budgetSum= this.getSum()

  }
}
