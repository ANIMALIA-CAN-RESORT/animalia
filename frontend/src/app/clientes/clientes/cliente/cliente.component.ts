import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteImpl } from '../../models/cliente-impl';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {
  @Input() cliente: ClienteImpl;
  @Output() clienteEliminar = new EventEmitter<ClienteImpl>();

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.clienteEliminar.emit(this.cliente);
  }
}
