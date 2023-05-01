import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaListComponent } from './plantas-list/planta-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PlantaListComponent],
  exports: [PlantaListComponent],
})
export class PlantaModule {}
