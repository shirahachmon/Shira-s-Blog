import { WebRequestsService } from './web-requests.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BudgetItem } from './budget-item.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  constructor(private webReqService: WebRequestsService) { }

  budgetsItems: BudgetItem[];
  budgetSum: number;


  // Get sum of all the budget items. Using reduce js functions.
  getItemsSum(){
    return this.budgetsItems.reduce((sum, item) =>{
      return sum+=item.amount
    },0)
  }

  //------------------------------------------------------------------------//
  // BUDGET ITEMS crud operators.
  //------------------------------------------------------------------------//


  // Get all items.
  getBudgetItems() :Observable<any>{
    return this.webReqService.get('budgetItems');
  }

  // Create a new item.
  createBudgetItem(amount: number, description: string): Observable<any>{
    return this.webReqService.post('budgetItems', { amount, description  })
  }

  // Update item by his id.
  updateBudgetItem(id: string, amount: number, description: string ): Observable<any>{
    return this.webReqService.patch(`budgetItems/${id}`, { amount, description  })
  }

  // Delete item by his id.
  deleteBudgetItem(id: string){
    return this.webReqService.delete(`budgetItems/${id}`)
  }

}
