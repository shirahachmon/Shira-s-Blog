import { NgForm } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/shared/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent {

  @Input() item: BudgetItem= new BudgetItem('', 0);

  //EventEmitter
  @Output() formSubmit: EventEmitter<BudgetItem>= new EventEmitter<BudgetItem>();

  onSubmit(form: NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
