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

  constructor(private clienteService: ClienteService) { }


  ngOnInit(): void {}

  delete(cliente: ClienteImpl): void {

    this.clienteService.delete(cliente.id).subscribe(response => console.log(cliente));
  }

}

