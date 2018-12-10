import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatExpansionModule,
  MatSnackBarModule
} from '@angular/material';

import { ExpenseCreateComponent } from './body/expense/expense-create/expense-create.component';
import { ExpenseListComponent } from './body/expense/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './body/expense/expense-list/expense-detail/expense-detail.component';
import { ExpenseComponent } from './body/expense/expense.component';
import { IncomeComponent } from './body/income/income.component';
import { IncomeCreateComponent } from './body/income/income-create/income-create.component';
import { IncomeListComponent } from './body/income/income-list/income-list.component';
import { IncomeDetailComponent } from './body/income/income-list/income-detail/income-detail.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BodyComponent } from './body/body.component';
import { ExpenseService } from './body/expense.service';
import { IncomeService } from './body/income.service';
import { CategoryService } from './body/category.service';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseCreateComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ExpenseComponent,
    IncomeComponent,
    IncomeCreateComponent,
    IncomeListComponent,
    IncomeDetailComponent,
    MainNavComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [
    ExpenseService,
    IncomeService,
    CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
