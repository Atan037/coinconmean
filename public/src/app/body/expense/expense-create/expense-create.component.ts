import { Component, OnInit, Input, Output } from '@angular/core';
import { ExpenseService } from '../../expense.service';
import { CategoryService } from '../../category.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {
  categorySelected = false;
  selectedCategoryIndex = 0;

  cofig: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(
    public expenseService: ExpenseService,
    public categoryService: CategoryService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  selectedI(categoryIndex) {
    this.selectedCategoryIndex = categoryIndex;
    this.categorySelected = true;
  }

  onSubmit() {
    console.log('Submited');
    this.expenseService.postExpenses(this.expenseService.form.value);
    this.onSuccess('Expense created successfully');
  }

  onSuccess(msg) {
    this.snackBar.open(msg, '', this.cofig);
  }
}
