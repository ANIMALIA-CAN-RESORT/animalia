import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteImpl } from 'src/app/clientes/models/cliente-impl';
import { Mascota } from '../models/mascota';
import { MascotaService } from '../service/mascota.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styles: [
  ]
})
export class MascotaComponent implements OnInit {
  @Input() mascota: Mascota;
  @Output() mascotaSeleccionada = new EventEmitter<Mascota>();
  cliente: ClienteImpl = new ClienteImpl();
  prestaciones: any [] = [0,0];

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.mascotaService.getCliente(this.mascota).subscribe((response) => this.cliente = this.mascotaService.mapearCliente(response));
    this.mascotaService.getPrestacionesMascota(this.mascota).subscribe((response) => this.prestaciones = this.mascotaService.extraerPrestacionesMascota(response));

  }

}
