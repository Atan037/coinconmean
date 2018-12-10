import { Injectable } from '@angular/core';
import { Expense } from '../model/expense';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'http://localhost:3000/api/expenses';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    amount: new FormControl('', Validators.required),
    expenseDescription: new FormControl(''),
    category: new FormControl(''),
    subCategory: new FormControl(''),
    paymentMethod: new FormControl(''),
    timestamp: new FormControl(Date.now())
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      amount: '',
      expenseDescription: '',
      category: '',
      subCategory: '',
      paymentMethod: '',
      timestamp: Date.now()
    });
  }

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  getExpenses(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      // map(this.extractData),
      catchError(this.handleError)
    );
  }

  getExpense(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(catchError(this.handleError));
  }

  postExpenses(data): Observable<any> {
    console.log(data);
    return this.http
      .post(apiUrl, data, httpOptions)
      .pipe(catchError(this.handleError));
  }


  updateExpense(data): Observable<any> {
    return this.http
      .put(apiUrl, data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  deleteExpense(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http
      .delete(url, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
