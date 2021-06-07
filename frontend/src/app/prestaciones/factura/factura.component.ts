import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/clientes/models/cliente';
import { Mascota } from 'src/app/mascotas/models/mascota';
import { Prestacion } from '../models/prestacion';
import { PrestacionService } from '../service/prestacion.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  mascota: Mascota;
  prestaciones: Prestacion[] = [];
  cliente: Cliente;


  constructor(
    private activateRoute: ActivatedRoute,
    private prestacionService: PrestacionService) { }

  ngOnInit() {
    this.prestacionService.getMascotaId(this.activateRoute.snapshot.params['id']).subscribe((response) => this.mascota = this.prestacionService.mapearMascota(response));
    this.prestacionService.getPrestacionesNoPagadasDeMascotaPorId(this.activateRoute.snapshot.params['id']).subscribe((response) => this.prestaciones = this.prestacionService.extraerPrestaciones(response));
    this.prestacionService.getCliente(this.activateRoute.snapshot.params['id']).subscribe((response) => this.cliente = this.prestacionService.mapearCliente(response));
  }

}
