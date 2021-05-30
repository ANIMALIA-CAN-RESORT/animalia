import { Component, Input, OnInit } from '@angular/core';
import { ClienteImpl } from '../models/cliente-impl';

@Component({
  selector: 'app-cliente-mascotas',
  templateUrl: './cliente-mascotas.component.html',
  styles: []
})
export class ClienteMascotasComponent implements OnInit {
  @Input() cliente: ClienteImpl;

  constructor() { }

  ngOnInit() {
  }

}
