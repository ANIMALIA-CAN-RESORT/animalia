import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.getClientes().subscribe(response => {
      this.clientes = this.clienteService.extraerClientes(response);
    });
  }

}
