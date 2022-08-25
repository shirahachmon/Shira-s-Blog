import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component} from '@angular/core';

@Component({
  selector: 'app-budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.scss']
})
export class BudgetCalculatorComponent {

  budgetItems: BudgetItem[]= new Array<BudgetItem>();
  budgetSum: number= 0;

  // Get sum of all the budget items. Using reduce js functions.
  getSum(){
    return this.budgetItems.reduce((sum, item) =>{
      return sum+=item.amount
    },0)
  }

  // Adding item to the budget list/budget array actually.
  addItem(newItem: BudgetItem){
    this.budgetItems.push(newItem);
    this.budgetSum= this.getSum()
  }

  // Delete item from the budget array.
  deleteItem(item: BudgetItem){
    let index= this.budgetItems.indexOf(item);
    // Splicing the array from the index of the item, until 1 index after-
    // In this case, delete only the item.
    this.budgetItems.splice(index, 1);
    this.budgetSum= this.getSum();
  }
}
