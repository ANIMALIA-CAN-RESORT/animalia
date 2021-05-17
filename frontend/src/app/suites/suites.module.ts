import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuitesRoutingModule } from './suites-routing.module';
import { SuitesComponent } from './suites/suites.component';


@NgModule({
  declarations: [SuitesComponent],
  imports: [
    CommonModule,
    SuitesRoutingModule
  ]
})
export class SuitesModule { }
