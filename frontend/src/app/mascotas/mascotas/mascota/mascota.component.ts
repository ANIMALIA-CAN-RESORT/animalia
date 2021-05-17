import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaImpl } from '../../models/mascota-impl';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.component.html',
  styles: []
})
export class MascotaComponent implements OnInit {

  @Input() mascota: MascotaImpl;
  @Output() mascotaEliminar = new EventEmitter<MascotaImpl>();
  @Output() mascotaEditar = new EventEmitter<MascotaImpl>();

  constructor(
    private mascotaService: MascotaService,
    private router: Router) { }


  ngOnInit(): void {
  }

  eliminar(mascota: MascotaImpl): void {
    this.mascotaEliminar.emit(mascota);
  }

  editar(mascota: MascotaImpl): void {
    this.mascotaEditar.emit(mascota);
  }

}

