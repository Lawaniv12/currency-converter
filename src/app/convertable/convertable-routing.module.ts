import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertableComponent } from './convertable.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';

const routes: Routes = [
  { path: '', component: ConvertableComponent },
  { path: 'calculator', component: CalculatorComponent},
  { path: 'currency', component: CurrencyTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConvertableRoutingModule { }
