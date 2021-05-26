import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteFormNuevoComponent } from './cliente-form-nuevo/cliente-form-nuevo.component';


@NgModule({
  declarations: [ClientesComponent, ClienteComponent, ClienteFormComponent, ClienteFormNuevoComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
