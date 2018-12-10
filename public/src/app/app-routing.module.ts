import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseComponent } from './body/expense/expense.component';
import { IncomeComponent } from './body/income/income.component';

const routes: Routes = [{ path: '', redirectTo: '/expenses', pathMatch: 'full'},
  { path: 'expenses', component: ExpenseComponent},
  { path: 'income', component: IncomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full'},
//   { path: 'home', component: HomeComponent},
//    { path: 'service', component: ServicesComponent },
//    { path: 'about', component: AboutComponent },
//    { path: 'guide', component: GuideComponent },
//   { path: 'dm', component: DaoMasterComponent , children: [
//     { path: 'status', component: StatusComponent },
//     { path: 'charities', component: SelectCharityComponent, children: [
//       { path: ':id', component: CharityDetailComponent },
//     ] },
//     { path: 'donate', component: SpecifyDonationComponent, children: [
//       { path: ':id', component: CharityDetailComponent }
//     ] },
//     { path: 'setup', component: SetupCharitiesComponent }
//   ] }
// ];
