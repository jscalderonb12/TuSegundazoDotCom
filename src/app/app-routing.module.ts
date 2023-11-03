import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsTableComponent } from 'src/cars/cars-table/cars-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: 'cars', component: CarsTableComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
