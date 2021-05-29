import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrestacionImpl } from '../models/prestacion-impl';
import { PrestacionService } from '../service/prestacion.service';

@Component({
  selector: 'app-prestacion-form',
  templateUrl: './prestacion-form.component.html',
  styles: [
  ]
})
export class PrestacionFormComponent implements OnInit {
  prestacion: PrestacionImpl = new PrestacionImpl();

  constructor(private prestacionService: PrestacionService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  crearCliente(): void {
    this.prestacionService.create(this.prestacion).subscribe((response) => {
      console.log(`He creado una ${this.prestacion.tipo}`);
      this.router.navigate(['/prestaciones']);
    });
  }
}
