import { Component, OnInit } from '@angular/core';
import { PlantaService } from '../planta.service';
import { Planta } from '../planta';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css'],
})
export class PlantaListComponent implements OnInit {
  plantas: Planta[] = [];
  totalPlantasInterior: number = 0;
  totalPlantasExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  ngOnInit() {
    this.getPlantas();
  }

  getPlantas() {
    return this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.contarTotalPlantasTipo();
    });
  }

  contarTotalPlantasTipo() {
    this.totalPlantasExterior = this.plantas.filter(
      (planta) => planta.tipo == 'Exterior'
    ).length;
    this.totalPlantasInterior = this.plantas.filter(
      (planta) => planta.tipo == 'Interior'
    ).length;
  }
}
