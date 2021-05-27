import { Component, OnInit } from '@angular/core';
import { ClienteImpl } from '../models/cliente-impl';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styles: [
  ]
})
export class ClienteFormComponent implements OnInit {
  cliente: ClienteImpl = new ClienteImpl('', '', '', '', '', '', '', '', '', null);

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.clienteService.create(this.cliente);
  }

}
