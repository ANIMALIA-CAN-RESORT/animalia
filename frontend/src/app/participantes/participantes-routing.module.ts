import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipanteFormComponent } from './participante-form/participante-form.component';
import { ParticipantesComponent } from './participantes/participantes.component';

const routes: Routes = [{
  path: '',
  component: ParticipantesComponent
},
{
  path: 'formulario',
  component: ParticipanteFormComponent
},
{
  path: 'formulario/:id',
  component: ParticipanteFormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantesRoutingModule { }
