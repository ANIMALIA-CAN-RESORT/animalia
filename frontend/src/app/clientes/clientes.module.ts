import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteItemComponent } from './cliente-item/cliente-item.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteFichaComponent } from './clientes/cliente-ficha/cliente-ficha.component';




@NgModule({
  declarations: [ClientesComponent, ClienteFichaComponent, ClienteFormComponent, ClienteItemComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class ClientesModule { }
