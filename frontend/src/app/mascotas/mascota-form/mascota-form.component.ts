import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaImpl } from '../models/mascota-impl';
import { MascotaService } from '../service/mascota.service';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styles: [
  ]
})
export class MascotaFormComponent implements OnInit {
  mascota: MascotaImpl = new MascotaImpl();

  constructor(private mascotaService: MascotaService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  crearMascota(): void {
    this.mascotaService.create(this.mascota).subscribe((response) => {
      console.log(`He creado a ${this.mascota.nombre}`);
      this.router.navigate(['/clientes']);
    });
  }
}
