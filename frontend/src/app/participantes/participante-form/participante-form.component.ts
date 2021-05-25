import { Component, Input } from "@angular/core";
import { OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuxiliaresService } from "src/app/service/auxiliares.service";
import { ParticipanteImpl } from "../models/participante-impl";
import { ParticipanteService } from "../service/participante.service";

@Component({
  selector: 'app-participante-form',
  templateUrl: './participante-form.component.html',
  styles: [
  ]
})
export class ParticipanteFormComponent implements OnInit {
  participante: ParticipanteImpl = new ParticipanteImpl();
  @Input() participanteEditar: ParticipanteImpl;
  cambiarBoton: boolean = true;


  constructor(
    private participanteService: ParticipanteService,
    private router: Router,
    private activateRoute: ActivatedRoute,//para usar el id como parametro(similar a los author del gallego)
    private auxiliaresService: AuxiliaresService
  ) { }

  ngOnInit(): void {
    if (this.cargarParticipante() != ' ') {//aqui le digo que si en la barra de navegacion  hay id, porque id no es vacio, (estoy editando un participante)
      this.cambiarBoton = false;//si el boton  cambia-->creo participante. si el boton no cambia-->sera editar...
      this.participanteService.getParticipante(this.cargarParticipante()).subscribe(response => this.participante = this.participanteService.mapearParticipante(response));
    }
  }

  create(): void {
    this.participanteService.create(this.participante).subscribe((response) => {
      console.log(`He creado ${this.participante.nombre}`);
      this.router.navigate(['/participantes']);
    });

  }

  actualizar(): void {
    this.participanteService.update(this.participante).subscribe((response) => {
      console.log(`He actualizado ${this.participante.nombre}`);
      this.router.navigate(['/participantes']);
    });
  }

  cargarParticipante(): string {
    const idBarraNavegacion: string = this.activateRoute.snapshot.params['id'];
    return this.auxiliaresService.recuperarId(idBarraNavegacion);
  }


}




