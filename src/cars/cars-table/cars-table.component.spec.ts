/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

import { CarsTableComponent } from './cars-table.component';
import { HttpClientModule } from '@angular/common/http';
import { Car } from '../cars';
import { CarsService } from '../cars.service';

describe('CarsTableComponent', () => {
  let component: CarsTableComponent;
  let fixture: ComponentFixture<CarsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarsTableComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsTableComponent);
    component = fixture.componentInstance;
    const cars: Car[] = [
      new Car(1, 'Toyota', 'Camry', 'XLE', 2022, 15000, 'Red', 'image1.png'),
      new Car(2, 'Honda', 'Civic', 'LX', 2021, 12000, 'Blue', 'image2.png'),
      new Car(3, 'Ford', 'Focus', 'SE', 2022, 10000, 'Silver', 'image3.png'),
    ];

    component.cars = cars; // Asignar los datos simulados al componente

    fixture.detectChanges();
    fixture.detectChanges();
  });

  it('should display a table with the correct number of rows and header', () => {
    const tableRows = fixture.debugElement.queryAll(
      By.css('.cars-table tbody tr')
    );
    const tableHeader = fixture.debugElement.queryAll(
      By.css('.cars-table thead th')
    );

    expect(tableRows.length).toBe(3); // Debería haber 3 filas
    expect(tableHeader.length).toBe(4); // Debería haber 4 columnas en el encabezado
  });
});
