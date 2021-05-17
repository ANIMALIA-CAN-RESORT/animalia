import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaImpl } from '../../models/mascota-impl';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  styles: []
})
export class MascotaFormComponent implements OnInit {

  mascota: MascotaImpl = new MascotaImpl();
  @Input() mascotaEditar: MascotaImpl;

  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private activateRoute: ActivatedRoute,//para usar el id como parametro(similar a los author del gallego)
  ) { }

  ngOnInit(): void {
    this.cargarMascota();
  }

  crearMascota(): void {
    this.mascotaService.create(this.mascota).subscribe((response) => {
      console.log(`He creado a ${this.mascota.nombre}`);
      this.router.navigate(['/mascotas']);
    });

  }

  actualizar(): void {
    this.mascotaService.update(this.mascota).subscribe((response) => {
      console.log(`He actualizado a ${this.mascota.nombre}`);
      this.router.navigate(['/mascotas']);
    });
  }

  cargarMascota(): void {
    this.activateRoute.params.subscribe((params) => {
      const id: string = params.id;
      if (id) {
        this.mascotaService
          .getMascota(id)
          .subscribe((mascota) => (this.mascota = mascota));
      }
    });
  }


}





