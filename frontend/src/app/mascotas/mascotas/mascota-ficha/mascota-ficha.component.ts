import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MascotaImpl } from '../../models/mascota-impl';

@Component({
  selector: 'app-mascota-ficha',
  templateUrl: './mascota-ficha.component.html',
  styles: [
  ]
})
export class MascotaFichaComponent implements OnInit {
  @Input() mascota: MascotaImpl;
  @Output() mascotaEliminar = new EventEmitter<MascotaImpl>();
  @Output() mascotaEditar = new EventEmitter<MascotaImpl>();

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.mascotaEliminar.emit(this.mascota);
  }

  editar(): void {
    this.mascotaEditar.emit(this.mascota);
  }
}
