import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PrestacionImpl } from '../../models/prestacion-impl';

@Component({
  selector: 'app-prestacion-ficha',
  templateUrl: './prestacion-ficha.component.html',
  styles: [
  ]
})
export class PrestacionFichaComponent implements OnInit {
  @Input() prestacion: PrestacionImpl;
  @Output() prestacionEliminar = new EventEmitter<PrestacionImpl>();
  @Output() prestacionEditar = new EventEmitter<PrestacionImpl>();

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.prestacionEliminar.emit(this.prestacion);
  }

  editar(): void {
    this.prestacionEditar.emit(this.prestacion);
  }
}
