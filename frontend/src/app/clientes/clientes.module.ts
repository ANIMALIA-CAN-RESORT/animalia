import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';


@NgModule({
  declarations: [ClientesComponent, ClienteComponent, ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ]
})
export class ClientesModule { }
