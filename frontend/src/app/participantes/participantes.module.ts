import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantesComponent } from './participantes/participantes.component';
import { ParticipantesRoutingModule } from './participantes-routing.module';
import { ParticipanteFormComponent } from './participante-form/participante-form.component';
import { FormsModule } from '@angular/forms';
import { AuxiliaresService } from '../service/auxiliares.service';
import { ParticipanteComponent } from './participante/participante.component';



@NgModule({
  declarations: [ParticipantesComponent, ParticipanteComponent, ParticipanteFormComponent],
  imports: [
    CommonModule,
    ParticipantesRoutingModule,
    FormsModule
  ],
  providers: [AuxiliaresService]
})
export class ParticipantesModule { }
