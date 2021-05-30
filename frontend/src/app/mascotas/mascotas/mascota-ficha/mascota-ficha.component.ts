import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteImpl } from 'src/app/clientes/models/cliente-impl';
import { MascotaImpl } from '../../models/mascota-impl';
import { MascotaService } from '../../service/mascota.service';

@Component({
  selector: 'app-mascota-ficha',
  templateUrl: './mascota-ficha.component.html',
  styles: [
  ]
})
export class MascotaFichaComponent implements OnInit {
  @Input() mascota: MascotaImpl;
  @Output() mascotaEliminar = new EventEmitter<MascotaImpl>();
  @Output() mascotaEditar = new EventEmitter<MascotaImpl>();
  cliente: ClienteImpl = new ClienteImpl();

  constructor(private mascotaService: MascotaService) { }

  ngOnInit(): void {
    this.mascotaService.getCliente(this.mascota).subscribe((response) => this.cliente = this.mascotaService.mapearCliente(response));

  }
  eliminar(): void {
    this.mascotaEliminar.emit(this.mascota);
  }

  editar(): void {
    this.mascotaEditar.emit(this.mascota);
  }
}
