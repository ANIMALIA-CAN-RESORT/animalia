import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { ClientesComponent } from './clientes/clientes.component';



const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'formulario',
    component: ClienteFormComponent
  },
  {
    path: 'formulario/:id',
    component: ClienteFormComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }