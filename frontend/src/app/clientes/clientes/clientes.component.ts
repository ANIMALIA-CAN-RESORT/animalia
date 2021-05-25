import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteImpl } from '../models/cliente-impl';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }//para poder mandar a pagina de clientes despues de editar

  ngOnInit(): void {
      this.clienteService.getClientes().subscribe(clientes => {
            this.clientes = this.clienteService.extraerClientes(clientes);
          });
  }
}

