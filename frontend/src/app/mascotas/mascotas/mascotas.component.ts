import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/clientes/models/cliente';
import { Mascota } from '../models/mascota';
import { MascotaImpl } from '../models/mascota-impl';
import { MascotaService } from '../service/mascota.service';


@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styles: [
  ]
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];
  mascotaVerDatos: Mascota;
  cliente:Cliente;
  clientes: Cliente[];

  constructor(
    private mascotaService: MascotaService,
    private router: Router) { }

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe((response) => this.mascotas = this.mascotaService.extraerMascotas(response));
    this.mascotaService.getClientes().subscribe((response) => this.clientes = this.mascotaService.extraerClientes(response));

  }

  verDatos(mascota: Mascota): void {
    this.mascotaVerDatos = mascota;
  }

  onMascotaEliminar(mascota: MascotaImpl): void {
    this.mascotaService.delete(mascota).subscribe(response => {
      console.log(`He borrado a ${mascota.nombre}`);
      this.router.navigate(['/clientes']);
    });
  }

  onMascotaEditar(mascota: MascotaImpl): void {
    this.mascotaService.update(mascota).subscribe(response => {
      console.log(`He actualizado a ${mascota.nombre}`);
      this.router.navigate(['/clientes']);
    });
  }
}
