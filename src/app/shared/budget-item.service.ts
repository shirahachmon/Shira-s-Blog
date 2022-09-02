import { WebRequestsService } from './web-requests.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetItemsService {

  constructor(private webReqService: WebRequestsService) { }

  getBudgetItems() :Observable<any>{
    return this.webReqService.get('budgetItems');
  }

  createBudgetItem(amount: number, description: string): Observable<any>{
    return this.webReqService.post('budgetItems', { amount, description  })
  }

  updateBudgetItem(id: string, amount: number, description: string ): Observable<any>{
    return this.webReqService.patch(`budgetItems/${id}`, { amount, description  })
  }

  deleteBudgetItem(id: string){
    return this.webReqService.delete(`budgetItems/${id}`)
  }

}
