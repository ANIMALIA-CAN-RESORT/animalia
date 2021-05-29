import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBed, faBone, faEuroSign } from '@fortawesome/free-solid-svg-icons';
import { Mascota } from '../models/mascota';
import { Prestacion } from '../models/prestacion';
import { PrestacionImpl } from '../models/prestacion-impl';
import { PrestacionService } from '../service/prestacion.service';


@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.component.html',
  styleUrls: ['./prestaciones.component.css'
  ]
})
export class PrestacionesComponent implements OnInit {
  faBed = faBed;
  faBone = faBone;
  faEuro =faEuroSign;
  prestaciones: Prestacion[] = [];
  prestacionVerDatos: Prestacion;
  mascota: Mascota;
  mascotas: Mascota[];

  constructor(
    private prestacionService: PrestacionService,
    private router: Router) { }

  ngOnInit(): void {
    this.prestacionService.getPrestaciones().subscribe((response) => this.prestaciones = this.prestacionService.extraerPrestaciones(response));
    this.prestacionService.getMascotas().subscribe((response) => this.mascotas = this.prestacionService.extraerMascotas(response));
  }

  verDatos(prestacion: Prestacion): void {
    this.prestacionVerDatos = prestacion;
  }

  onPrestacionEliminar(prestacion: PrestacionImpl): void {
    this.prestacionService.delete(prestacion).subscribe(response => {
      console.log(`He borrado una ${prestacion.tipo}`);
      this.router.navigate(['/prestaciones']);
    });
  }

  onPrestacionEditar(prestacion: PrestacionImpl): void {
    this.prestacionService.update(prestacion).subscribe(response => {
      console.log(`He actualizado una ${prestacion.tipo}`);
      this.router.navigate(['/prestaciones']);
    });
  }

  filtrarSinPagar(): void {
    this.prestacionService.getPrestaciones().subscribe((response) => this.prestaciones = this.prestacionService.extraerPrestaciones(response).filter(p => !p.pagada));
  }
  filtrarPagadas(): void {
    this.prestacionService.getPrestaciones().subscribe((response) => this.prestaciones = this.prestacionService.extraerPrestaciones(response).filter(p => p.pagada));
  }
}
