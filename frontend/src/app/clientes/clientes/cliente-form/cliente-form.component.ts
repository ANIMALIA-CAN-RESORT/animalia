import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteImpl } from '../../models/cliente-impl';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styles: []
})
export class ClienteFormComponent implements OnInit {

  cliente: ClienteImpl = new ClienteImpl();
  cambiarBoton: boolean = true;
  @Input() clienteEditar: ClienteImpl;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activateRoute: ActivatedRoute,//para usar el id como parametro(similar a los author del gallego)
  ) { }

  ngOnInit(): void {
    this.cargarCliente();
    if (this.activateRoute.snapshot.params['id'] != ' ') {
      this.cambiarBoton = false;
    }
  }

  crearProducto(): void {
    this.clienteService.create(this.cliente).subscribe((response) => {
      console.log(`He creado ${this.cliente.nombre}`);
      this.router.navigate(['/clientes']);
    });

  }

  actualizar(): void {
    this.clienteService.update(this.cliente).subscribe((response) => {
      console.log(`He actualizado ${this.cliente.nombre}`);
      this.router.navigate(['/clientes']);
    });
  }

  cargarCliente(): void {
    this.activateRoute.params.subscribe((params) => {
      const id: number = params.id;
      if (id) {
        this.clienteService
          .getCliente(id)
          .subscribe((cliente) => (this.cliente = cliente));
      }
    });
  }


}





