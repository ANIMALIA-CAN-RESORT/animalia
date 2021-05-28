import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private prestacionService: PrestacionService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  crearCliente(): void {
    this.prestacionService.create(this.prestacion).subscribe((response) => {
      console.log(`He creado un ${this.prestacion.tipo}`);
      this.router.navigate(['/prestaciones']);
    });
  }
}
