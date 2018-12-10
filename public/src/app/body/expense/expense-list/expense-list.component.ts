import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../expense.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: any;

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.expenseService.getExpenses().subscribe(res => {
      // console.log(res);
      this.expenses = Object.values(res.expenses);
    }, err => {
      console.log(err);
    });
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe(res => {
      console.log(res);
      this.expenses = res;
    }, err => {
      console.log(err);
    });
  }
}

