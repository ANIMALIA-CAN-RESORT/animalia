import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxiliaresService } from 'src/app/service/auxiliares.service';
import { Participante } from '../models/participante';
import { ParticipanteImpl } from '../models/participante-impl';
import { ParticipanteService } from '../service/participante.service';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styles: [
  ]
})
export class ParticipanteComponent implements OnInit {
  @Input() participante: ParticipanteImpl;
  @Output() participanteEliminar = new EventEmitter<ParticipanteImpl>();
  @Output() participanteEditar = new EventEmitter<ParticipanteImpl>();

  constructor(
    private participanteService: ParticipanteService,
    private auxiliaresService: AuxiliaresService,//tengo que poner en el "providers" del modulo...auxiliaresService
    private router: Router) { }


  ngOnInit(): void {

  }

  eliminar(participante: ParticipanteImpl): void {
    this.participanteEliminar.emit(participante);

  }

  editar(participante: ParticipanteImpl): void {
    this.participanteEditar.emit(participante);



  }

}

