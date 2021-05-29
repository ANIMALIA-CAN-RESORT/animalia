import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../models/mascota';
import { PrestacionImpl } from '../models/prestacion-impl';
import { PrestacionService } from '../service/prestacion.service';

@Component({
  selector: 'app-prestacion-form-alojamiento',
  templateUrl: './prestacion-form-alojamiento.component.html',
  styles: [
  ]
})
export class PrestacionFormAlojamientoComponent implements OnInit {
  prestacion: PrestacionImpl = new PrestacionImpl();
  mascota: Mascota;
  mascotas: Mascota[];
  codMascota: string = null;

  constructor(private prestacionService: PrestacionService, 
    private router: Router) { }

  ngOnInit(): void {
    this.prestacionService.getMascotas().subscribe((response) => this.mascotas = this.prestacionService.extraerMascotas(response));

  }

  crearAlojamiento(): void {
    this.prestacionService.createAlojamiento(this.prestacion).subscribe((response) => {
      console.log(`He creado un ${this.prestacion.tipo}`);
      this.router.navigate(['/prestaciones']);
    });
  }

  cargarMascota() {
    this.mascota = null;
    console.log('cargar ', this.codMascota);
    this.mascota = this.mascotas.filter((m) => m.id == this.codMascota)[0];
  }

}
