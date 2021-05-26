import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: []
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  this.clienteService.getClientes()
      .subscribe(clientes => {
        this.clientes = this.clienteService.extraerClientes(clientes);
      });
  }
  onEliminarCliente(cliente: Cliente): void {
    this.clienteService.borrar(cliente.id).subscribe(response => {
      console.log(response);
    });
  }

  OnEditarCliente(cliente: Cliente): void {
    let url = `clientes/formulario/${cliente.id}`;
    this.router.navigate([url]);
  }
}
