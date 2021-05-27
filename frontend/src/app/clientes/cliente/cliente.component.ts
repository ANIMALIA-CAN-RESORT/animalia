import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: []
})
export class ClienteComponent implements OnInit {

  @Input() cliente: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  delete(cliente: Cliente): void {
    this.clienteService.borrar(cliente).subscribe(response => console.log(cliente));
  }

 
}
