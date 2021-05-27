import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetasRoutingModule } from './planetas-routing.module';
import { PlanetaComponent } from './planeta/planeta.component';


@NgModule({
  declarations: [PlanetaComponent],
  imports: [
    CommonModule,
    PlanetasRoutingModule
  ]
})
export class PlanetasModule { }
