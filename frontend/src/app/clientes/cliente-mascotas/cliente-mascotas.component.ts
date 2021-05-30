import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-cliente-mascotas',
  templateUrl: './cliente-mascotas.component.html',
  styles: []
})
export class ClienteMascotasComponent implements OnInit {
  mascotas: any[];
  constructor(
    private activateRoute: ActivatedRoute,
    private clienteService: ClienteService) { }
 
    ngOnInit(): void {
      this.clienteService.getMascotasIdCliente(this.activateRoute.snapshot.params['id']).subscribe((response) => this.mascotas = this.clienteService.extraerMascotasCliente(response));

    }
}
