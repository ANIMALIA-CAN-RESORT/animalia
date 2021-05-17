import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from '../models/mascota';
import { MascotaService } from '../service/mascota.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styles: []
})
export class MascotasComponent implements OnInit {
  mascotas: Mascota[] = [];

  constructor(
    private mascotaService: MascotaService,
    private router: Router) { }//para poder mandar a pagina de clientes/propietarios despues de editar

  ngOnInit(): void {
      this.mascotaService.getMascotas().subscribe(mascotas => {
            this.mascotas = mascotas;
          });
  }

  onEliminarMascota(mascota: Mascota): void {
    this.mascotaService.delete(mascota.id).subscribe(response => {
      console.log(response);
    });
  }

  OnEditarMascota(mascota: Mascota): void {
    let url = `mascotas/formulario/${mascota.id}`;
    this.router.navigate([url]);
  }
}
