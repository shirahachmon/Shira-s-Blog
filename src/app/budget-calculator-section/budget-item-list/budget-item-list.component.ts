import { ActivatedRoute, Params, Router } from '@angular/router';
import { BudgetItemsService } from './../../shared/budget-item.service';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit{

  constructor(public dialog: MatDialog,
              public budgetItemsService: BudgetItemsService) { }

  @Output() delete: EventEmitter<BudgetItem> =new EventEmitter<BudgetItem>();

  onDeleteButtonClick(item: BudgetItem){
      this.delete.emit(item)
  }

  ngOnInit(): void {
  // budgetItems has to be loading from the server to here.
    this.budgetItemsService.getBudgetItems().subscribe((items: BudgetItem[] ) =>{
      this.budgetItemsService.budgetsItems= items;
      this.budgetItemsService.budgetSum= this.budgetItemsService.getItemsSum();
    })
  }
}
