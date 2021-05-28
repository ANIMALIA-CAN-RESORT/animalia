import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Prestacion } from '../models/prestacion';

@Component({
  selector: 'app-prestacion',
  templateUrl: './prestacion.component.html',
  styles: [
  ]
})
export class PrestacionComponent implements OnInit {
  @Input() prestacion: Prestacion;
  @Output() prestacionSeleccionada = new EventEmitter<Prestacion>();

  constructor() { }

  ngOnInit(): void {
  }

}
