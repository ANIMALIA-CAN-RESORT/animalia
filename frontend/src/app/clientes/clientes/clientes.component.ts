import { Component, OnInit } from '@angular/core';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { Cliente } from '../models/cliente';
import { ClienteImpl } from '../models/cliente-impl';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  todosClientes: Cliente[] = [];
  clienteVerDatos: Cliente;
  numPaginas: number = 0;

  constructor(
    private clienteService: ClienteService,
    private auxService: AuxiliarService) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((response) => this.clientes = this.clienteService.extraerClientes(response));
    this.getTodosClientes();
  }

  verDatos(cliente: Cliente): void {
    this.clienteVerDatos = cliente;
  }

  onClienteEliminar(cliente: ClienteImpl): void {
    console.log(`He eliminado a ${cliente.nombre}`);
    this.clientes = this.clientes.filter(c => cliente !== c)
  }

  getTodosClientes(): void {
    this.clienteService.getClientes().subscribe(r => {
      this.numPaginas = this.auxService.getPaginasResponse(r);
      for (let index = 1; index <= this.numPaginas; index++) {
        this.clienteService.getClientesPagina(index)
          .subscribe(response => {
            this.todosClientes.push(...this.clienteService.extraerClientes(response));
          });
      }
    });
  }

}
