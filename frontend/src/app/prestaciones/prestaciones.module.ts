import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrestacionesComponent } from './prestaciones/prestaciones.component';
import { PrestacionFichaComponent } from './prestaciones/prestacion-ficha/prestacion-ficha.component';
import { PrestacionComponent } from './prestacion/prestacion.component';
import { PrestacionesRoutingModule } from './prestaciones-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrestacionFormAlojamientoComponent } from './prestacion-form-alojamiento/prestacion-form-alojamiento.component';
import { PrestacionFormAlimentacionComponent } from './prestacion-form-alimentacion/prestacion-form-alimentacion.component';

@NgModule({
  declarations: [PrestacionesComponent, PrestacionFichaComponent, PrestacionFormAlojamientoComponent,PrestacionFormAlimentacionComponent, PrestacionComponent],
  imports: [
    CommonModule,
    PrestacionesRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PrestacionesModule { }
