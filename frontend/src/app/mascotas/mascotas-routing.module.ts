import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';
import { MascotasComponent } from './mascotas/mascotas.component';

const routes: Routes = [
  {
    path: '',
    component: MascotasComponent
  },
  {
    path: 'formulario',
    component: MascotaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MascotasRoutingModule { }
