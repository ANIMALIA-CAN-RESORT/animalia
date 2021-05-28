import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestacion } from '../models/prestacion';
import { PrestacionImpl } from '../models/prestacion-impl';
import { PrestacionService } from '../service/prestacion.service';


@Component({
  selector: 'app-prestaciones',
  templateUrl: './prestaciones.component.html',
  styles: [
  ]
})
export class PrestacionesComponent implements OnInit {
  prestaciones: Prestacion[] = [];
  prestacionVerDatos: Prestacion;

  constructor(
    private prestacionService: PrestacionService,
    private router: Router) { }

  ngOnInit(): void {
    this.prestacionService.getPrestaciones().subscribe((response) => this.prestaciones = this.prestacionService.extraerPrestaciones(response));
  }

  verDatos(prestacion: Prestacion): void {
    this.prestacionVerDatos = prestacion;
  }

  onPrestacionEliminar(prestacion: PrestacionImpl): void {
    this.prestacionService.delete(prestacion).subscribe(response => {
      console.log(`He borrado a ${prestacion.nombre}`);
      this.router.navigate(['/prestaciones']);
    });
  }

  onPrestacionEditar(prestacion: PrestacionImpl): void {
    this.prestacionService.update(prestacion).subscribe(response => {
      console.log(`He actualizado a ${prestacion.nombre}`);
      this.router.navigate(['/prestaciones']);
    });
  }
}
