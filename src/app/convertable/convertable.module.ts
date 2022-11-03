import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertableRoutingModule } from './convertable-routing.module';
import { ConvertableComponent } from './convertable.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ConvertableComponent,
    CalculatorComponent,
    CurrencyTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConvertableRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class ConvertableModule { }
