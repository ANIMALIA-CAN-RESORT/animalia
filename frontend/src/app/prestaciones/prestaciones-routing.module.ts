import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestacionFormAlimentacionComponent } from './prestacion-form-alimentacion/prestacion-form-alimentacion.component';
import { PrestacionFormAlojamientoComponent } from './prestacion-form-alojamiento/prestacion-form-alojamiento.component';
import { PrestacionesComponent } from './prestaciones/prestaciones.component';

const routes: Routes = [
  {
    path: '',
    component: PrestacionesComponent
  },
  {
    path: 'formularioAlojamiento',
    component: PrestacionFormAlojamientoComponent
  },
  ,
  {
    path: 'formularioAlimentacion',
    component: PrestacionFormAlimentacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestacionesRoutingModule { }
