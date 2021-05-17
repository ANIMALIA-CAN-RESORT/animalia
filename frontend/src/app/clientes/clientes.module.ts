import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientesComponent, ClienteComponent, ClienteFormComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
