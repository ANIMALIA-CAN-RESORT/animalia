import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-item',
  templateUrl: './cliente-item.component.html',
  styles: [
  ]
})
export class ClienteItemComponent implements OnInit {
  @Input() cliente: Cliente;
  @Output() clienteSeleccionado = new EventEmitter<Cliente>();

  constructor() { }

  ngOnInit(): void {
  }

}
