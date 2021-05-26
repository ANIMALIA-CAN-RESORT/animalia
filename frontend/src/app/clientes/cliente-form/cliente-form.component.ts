import { HttpParams } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../models/cliente';
import { ClienteImpl } from '../models/cliente-impl';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styles: [
  ]
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente = new ClienteImpl();
  @Input() clienteEditar: ClienteImpl;

  constructor(
    private clienteService: ClienteService,
    private activateRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }  

  cargarCliente(): string {
    this.activateRoute.params.subscribe((params) => {
      const id: string = params.id;
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  return ;
  }

  actualizar(): void {
      this.clienteService.actualizar(this.cliente).subscribe(
        (cliente) => {
          console.log(`He actualizado al cliente ${this.cliente.nombre}`);
          this.router.navigate(['/clientes']);
      });
    }

}
