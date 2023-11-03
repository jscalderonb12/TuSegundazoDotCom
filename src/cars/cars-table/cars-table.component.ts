import { Component, OnInit } from '@angular/core';
import { Car } from '../cars';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-table',
  templateUrl: './cars-table.component.html',
  styleUrls: ['./cars-table.component.css'],
})
export class CarsTableComponent implements OnInit {
  cars: Car[] = [];
  brands: string[] = [];
  carCount: { [brand: string]: number } = {};

  constructor(private carsService: CarsService) {}

  countCarsByMarca(cars: Car[]): void {
    const count: { [marca: string]: number } = {};
    cars.forEach((car) => {
      if (count[car.marca]) {
        count[car.marca]++;
      } else {
        count[car.marca] = 1;
      }
    });

    const countArray = Object.entries(count);
    countArray.sort((a, b) => b[1] - a[1]);
    const sortedCount: { [marca: string]: number } = {};
    countArray.forEach(([marca, conteo]) => {
      this.brands.push(marca);
      sortedCount[marca] = conteo;
    });

    this.carCount = sortedCount;
  }

  getCars(): void {
    this.carsService.getCars().subscribe((response) => {
      this.cars = response;
      this.countCarsByMarca(this.cars);
    });
  }

  ngOnInit() {
    this.getCars();
  }
}
