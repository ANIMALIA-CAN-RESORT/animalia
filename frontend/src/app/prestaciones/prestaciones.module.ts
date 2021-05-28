import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrestacionesComponent } from './prestaciones/prestaciones.component';
import { PrestacionFichaComponent } from './prestaciones/prestacion-ficha/prestacion-ficha.component';
import { PrestacionFormComponent } from './prestacion-form/prestacion-form.component';
import { PrestacionComponent } from './prestacion/prestacion.component';
import { PrestacionesRoutingModule } from './prestaciones-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PrestacionesComponent, PrestacionFichaComponent, PrestacionFormComponent, PrestacionComponent],
  imports: [
    CommonModule,
    PrestacionesRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PrestacionesModule { }
