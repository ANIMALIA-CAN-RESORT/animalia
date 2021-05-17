import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteImpl } from '../../models/cliente-impl';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  @Input() cliente: ClienteImpl;
  @Output() clienteEliminar = new EventEmitter<ClienteImpl>();
  @Output() clienteEditar = new EventEmitter<ClienteImpl>();

  constructor(
    private clienteService: ClienteService,
    private router: Router) { }


  ngOnInit(): void {
  }

  eliminar(cliente: ClienteImpl): void {
    this.clienteEliminar.emit(cliente);
  }

  editar(cliente: ClienteImpl): void {
    this.clienteEditar.emit(cliente);
  }

}

