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
  precioFactura: number = 0;
  iva: string |number = 0; 
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  hoy = new Date();
  dia: number = this.hoy.getDate();
  mes: string = this.meses[this.hoy.getMonth()];
  year: number = this.hoy.getFullYear();
  numeroFactura: number = Math.floor((Math.random()*1000000)+1);


  constructor(
    private activateRoute: ActivatedRoute,
    private prestacionService: PrestacionService) { }

  ngOnInit() {
    this.prestacionService.getMascotaId(this.activateRoute.snapshot.params['id']).subscribe((response) => this.mascota = this.prestacionService.mapearMascota(response));
    this.prestacionService.getPrestacionesNoPagadasDeMascotaPorId(this.activateRoute.snapshot.params['id']).subscribe((response) => {
    this.prestaciones = this.prestacionService.extraerPrestaciones(response);
    this.getPrecioFactura();
    });
    this.prestacionService.getCliente(this.activateRoute.snapshot.params['id']).subscribe((response) => this.cliente = this.prestacionService.mapearCliente(response));
  }

  getPrecioFactura(): void {
    this.precioFactura = 0;
    this.iva = 0;
    for (let prestacion of this.prestaciones) {
      this.precioFactura += prestacion.precioPrestacion;
    }
    this.iva = (0.21/1.21 * this.precioFactura).toFixed(2);
  }
}
