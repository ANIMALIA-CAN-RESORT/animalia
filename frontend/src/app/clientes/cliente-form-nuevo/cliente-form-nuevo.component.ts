import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteImpl } from '../models/cliente-impl';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-form-nuevo',
  templateUrl: './cliente-form-nuevo.component.html',
  styles: [
  ]
})
export class ClienteFormNuevoComponent implements OnInit {

  cliente: Cliente = new ClienteImpl();

  constructor(
    private clienteService: ClienteService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }  

  crearCliente(): void {
    this.clienteService.create(this.cliente).subscribe(response => {
      console.log(`He creado ${this.cliente.nombre}`);
      this.router.navigate(['/clientes']);
    });
  }
}
