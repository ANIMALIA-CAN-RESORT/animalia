import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBed, faBone, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Prestacion } from '../models/prestacion';
import { PrestacionService } from '../service/prestacion.service';

@Component({
  selector: 'app-prestacion',
  templateUrl: './prestacion.component.html',
  styleUrls: ['./prestacion.component.css'
  ]
})
export class PrestacionComponent implements OnInit {
  @Input() prestacion: Prestacion;
  @Output() prestacionSeleccionada = new EventEmitter<Prestacion>();
  faBed = faBed;
  faBone = faBone;
  faTimes =faTimes;
  faCheck = faCheck;
  
  constructor(private prestacionService: PrestacionService) { }

  ngOnInit(): void {
  }

}
