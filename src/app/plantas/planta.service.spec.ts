/* tslint:disable:no-unused-variable */

import {
  ComponentFixture,
  TestBed,
  async,
  inject,
} from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { faker } from '@faker-js/faker';
import { PlantaListComponent } from './plantas-list/planta-list.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Planta } from './planta';
import { By } from '@angular/platform-browser';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantaListComponent],
      providers: [PlantaService],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plantas.push(planta);
    }
    fixture.detectChanges();
    debug = fixture.debugElement.query(By.css('.table'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PlantaListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Vivero');
  });

  it('should create a table with 3 rows plus header', () => {
    const filas = debug.nativeElement.querySelectorAll('tr');
    expect(filas.length).toBe(4);
  });
});
