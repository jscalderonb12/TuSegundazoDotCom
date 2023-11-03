import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsTableComponent } from './cars-table/cars-table.component';

@NgModule({
  imports: [CommonModule],
  exports: [CarsTableComponent],
  declarations: [CarsTableComponent],
})
export class CarsModule {}
