import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestacionesRoutingModule { }
