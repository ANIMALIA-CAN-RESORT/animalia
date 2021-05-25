import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuxiliaresService } from 'src/app/service/auxiliares.service';
import { Participante } from '../models/participante';
import { ParticipanteImpl } from '../models/participante-impl';
import { ParticipanteService } from '../service/participante.service';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styles: []
})

export class ParticipantesComponent implements OnInit {
  participantes: Participante[] = [];
  idParticipanteEditar: string = '';
  @Input() participanteEditar: ParticipanteImpl;

  constructor(
    private participanteService: ParticipanteService,
    private auxiliaresService: AuxiliaresService,//tengo que poner en el "providers" del modulo...auxiliaresService
    private router: Router) { }//para poder mandar a pagina de participantes despues de editar

  ngOnInit(): void {
    this.getParticipantes();
  }


  getParticipantes(): void {
    this.participanteService.getParticipantes().subscribe(response => {
      this.participantes = this.participanteService.extraerParticipantes(response);
    });

  }

  onEliminarParticipante(participante: Participante): void {
    this.participanteService.delete(participante.id).subscribe(response => {
      console.log(response);
    });
  }

  OnEditarParticipante(participante: Participante): void {
    let url = `participantes/formulario/${this.auxiliaresService.formatearId(participante.id)}`;
    this.router.navigate([url]);


  }
}

