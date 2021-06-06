import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/mascotas/models/mascota';
import { Prestacion } from '../models/prestacion';
import { PrestacionService } from '../service/prestacion.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styles: []
})
export class FacturaComponent implements OnInit {

  prestaciones: Prestacion[] = [];


  constructor(
    private activateRoute: ActivatedRoute,
    private prestacionService: PrestacionService) { }

  ngOnInit() {
    this.prestacionService.getPrestacionesNoPagadasDeMascota(this.activateRoute.snapshot.params['id']).subscribe((response) => this.prestaciones = this.prestacionService.extraerPrestaciones(response));
  }

}
