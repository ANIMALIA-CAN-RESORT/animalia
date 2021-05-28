import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasComponent } from './mascotas/mascotas.component';
import { MascotaComponent } from './mascota/mascota.component';
import { MascotaFichaComponent } from './mascotas/mascota-ficha/mascota-ficha.component';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';


@NgModule({
  declarations: [MascotasComponent, MascotaFichaComponent, MascotaFormComponent, MascotaComponent],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule
  ]
})
export class MascotasModule { }
