import { EditItemModelComponent } from './../edit-item-model/edit-item-model.component';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/app/shared/budget-item.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {


  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> =new EventEmitter<BudgetItem>();
  constructor(public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  onDeleteButtonClick(item: BudgetItem){
    this.delete.emit(item)
  }

  onCardclick(item: BudgetItem){
    // Show the edit model
    const dialogRef= this.dialog.open(EditItemModelComponent, {
      width:'580px',
      data:item
      });

      dialogRef.afterClosed().subscribe(result=> {
          // Check if results have a value
          if(result){
            // Replace the item with the updated item to the form.
            this.budgetItems[this.budgetItems.indexOf(item)]= result;
        }
      })
  }

}
