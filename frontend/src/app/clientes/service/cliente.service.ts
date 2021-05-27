import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';
import { ClienteImpl } from '../models/cliente-impl';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private urlEndPoint: string = environment.host + 'clientes';

  constructor(private http: HttpClient, private router: Router) { }

  borrar(cliente: Cliente): Observable<Cliente> {
    return this.http.delete<Cliente>(cliente.url);
  }

  getClientes(): Observable<any> {

    return this.http.get<any>(this.urlEndPoint);
  }

  extraerClientes(respuestaApi: any): Cliente[] {
    const clientes: Cliente[] = [];
    respuestaApi._embedded.clientes.forEach(c => {
      const cMapeado = this.extraerCliente(c);
      clientes.push(cMapeado);
    });
    return clientes;
  }
  extraerCliente(clienteDesdeApi): Cliente {

    const clienteApi = this.mapearCliente(clienteDesdeApi);
    const url = clienteDesdeApi._links.self.href;
    clienteApi.id = url.slice(url.lastIndexOf('/') + 1, url.length);

    return clienteApi;
  }
  mapearCliente(clienteApi): Cliente {
    const cliente = new ClienteImpl();
    cliente.url = clienteApi._links.self.href;
    cliente.id = cliente.url.slice(cliente.url.lastIndexOf('/') + 1, cliente.url.length);
    cliente.nombre = clienteApi.nombre;
    cliente.apellido1 = clienteApi.apellido1;
    cliente.apellido2 = clienteApi.apellido2;
    cliente.dni = clienteApi.dni;
    cliente.tfno = clienteApi.tfno;
    cliente.email = clienteApi.email;

    return cliente;
  }


}
