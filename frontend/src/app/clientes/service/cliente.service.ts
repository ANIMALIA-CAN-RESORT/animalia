import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuxiliarService } from 'src/app/service/auxiliar.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
import { ClienteImpl } from '../models/cliente-impl';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}people`;

  constructor(
    private http: HttpClient,
    private auxService: AuxiliarService) { }


  getClientes(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerClientes(respuestaApi: any): Cliente[] {
    const clientes: Cliente[] = [];
    respuestaApi.results.forEach(c => {
      clientes.push(this.mapearCliente(c));

    });
    return clientes;
  }

  mapearCliente(clienteApi: any): ClienteImpl {
    return new ClienteImpl(
      clienteApi.name,
      clienteApi.height,
      clienteApi.mass,
      clienteApi.hair_color,
      clienteApi.skin_color,
      clienteApi.eye_color,
      clienteApi.birth_year,
      clienteApi.gender,
      clienteApi.homeworld,
      clienteApi.films);
  }

  create(cliente: Cliente): void {
    console.log(`Se ha creado el cliente: ${JSON.stringify(cliente)}`);
  }

  getClientesPagina(pagina: number): Observable<any> {
    return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  }



}
