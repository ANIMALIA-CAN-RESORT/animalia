import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotasComponent } from './mascotas/mascotas.component';
import { FormsModule } from '@angular/forms';
import { MascotaComponent } from './mascotas/mascota/mascota.component';
import { MascotaFormComponent } from './mascotas/mascota-form/mascota-form.component';


@NgModule({
  declarations: [MascotasComponent, MascotaComponent, MascotaFormComponent],
  imports: [
    CommonModule,
    MascotasRoutingModule,
    FormsModule
  ]
})
export class MascotasModule { }
