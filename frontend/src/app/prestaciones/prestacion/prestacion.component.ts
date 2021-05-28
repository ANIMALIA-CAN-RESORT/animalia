import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBed, faBone, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Prestacion } from '../models/prestacion';

@Component({
  selector: 'app-prestacion',
  templateUrl: './prestacion.component.html',
  styles: [
  ]
})
export class PrestacionComponent implements OnInit {
  faBed = faBed;
  faBone = faBone;
  faTimes =faTimes;
  faCheck = faCheck;
  variablePago = faCheck;
  @Input() prestacion: Prestacion;
  @Output() prestacionSeleccionada = new EventEmitter<Prestacion>();

  constructor() { }

  ngOnInit(): void {
  }

}
