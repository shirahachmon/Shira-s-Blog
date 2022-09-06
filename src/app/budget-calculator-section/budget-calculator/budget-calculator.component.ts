import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component} from '@angular/core';
import { BudgetItemsService } from 'src/app/shared/budget-item.service';

@Component({
  selector: 'app-budget-calculator',
  templateUrl: './budget-calculator.component.html',
  styleUrls: ['./budget-calculator.component.scss']
})
export class BudgetCalculatorComponent{

  constructor(public budgetItemService: BudgetItemsService){}

  // Adding item to the budget list/budget array actually.
  addItem(newItem: BudgetItem){
    this.budgetItemService.createBudgetItem(newItem.amount, newItem.description).subscribe((newItem: BudgetItem)=>{
      this.budgetItemService.budgetsItems.push(newItem);
      this.budgetItemService.budgetSum= this.budgetItemService.getItemsSum();
    })
  }

  // Delete item from the budget array.
  deleteItem(item: BudgetItem){

    // Getiing the id of the chosen to be removed.
    let index= this.budgetItemService.budgetsItems.indexOf(item);

    // DELETE http request to the server.
    this.budgetItemService.deleteBudgetItem(item._id).subscribe((res)=>{
    // Splice it from he array- immidiate react in the UI.
    this.budgetItemService.budgetsItems.splice(index, 1);
    // Immidiate react in the UI as well- update sum.
    this.budgetItemService.budgetSum= this.budgetItemService.getItemsSum();
    });
  }
}
