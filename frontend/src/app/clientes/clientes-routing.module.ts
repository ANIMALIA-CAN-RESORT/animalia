import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteFormNuevoComponent } from './cliente-form-nuevo/cliente-form-nuevo.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path: 'formulario',
    component: ClienteFormNuevoComponent
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
