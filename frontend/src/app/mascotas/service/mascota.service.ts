import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cliente } from 'src/app/clientes/models/cliente';
import { ClienteImpl } from 'src/app/clientes/models/cliente-impl';
import { environment } from 'src/environments/environment';
import { Mascota } from '../models/mascota';
import { MascotaImpl } from '../models/mascota-impl';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {


  private host: string = environment.hostAnimalia;
  private urlEndPoint: string = `${this.host}mascotas/`;

  constructor(
    private http: HttpClient) { }

  getMascotas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerMascotas(respuestaApi: any): Mascota[] {
    const mascotas: Mascota[] = [];
    respuestaApi._embedded.mascotas.forEach(m => {
      mascotas.push(this.mapearMascota(m));

    });
    return mascotas;
  }

  mapearMascota(mascotaApi: any): MascotaImpl {
    const mascota = new MascotaImpl();
    mascota.nombre = mascotaApi.nombre;
    mascota.talla = mascotaApi.talla;
    mascota.chip = mascotaApi.chip;
    mascota.raza = mascotaApi.raza;
    mascota.url = mascotaApi._links.self.href;
    mascota.id = mascota.getId(mascota.url);

    return mascota;
  }

  create(mascota: Mascota): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, mascota).pipe(
      catchError((e) => {
        if (e.status === 400) {
          return throwError(e);
        }
        if (e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  delete(mascota): Observable<Mascota> {
    return this.http.delete<Mascota>(`${this.urlEndPoint}${mascota.id}`)
      .pipe(
        catchError((e) => {
          if (e.status === 405) {
            console.error('El metodo está bien hecho');
          }
          return throwError(e);
        })
      );
  }

  update(mascota: Mascota): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}${mascota.id}`, mascota)
      .pipe(
        catchError((e) => {
          if (e.status === 400) {
            return throwError(e);
          }
          if (e.error.mensaje) {
            console.error(e.error.mensaje);
          }
          return throwError(e);
        })
      );
  }

  getMascota(id): Observable<any> {
    return this.http.get<Mascota>(`${this.urlEndPoint}${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

  getClientes(): Observable<any> {
    return this.http.get<any>(`${this.host}clientes/`);
  }

  extraerClientes(respuestaApi: any): Cliente[] {
    const clientes: Cliente[] = [];
    respuestaApi._embedded.clientes.forEach(c => {
      clientes.push(this.mapearCliente(c));
    });
    return clientes;
  }

  mapearCliente(clienteApi: any): ClienteImpl {
    const cliente = new ClienteImpl();
    cliente.nombre = clienteApi.nombre;
    cliente.apellido1 = clienteApi.apellido1;
    cliente.apellido2 = clienteApi.apellido2;
    cliente.tfno = clienteApi.tfno;
    cliente.email = clienteApi.email;
    cliente.dni = clienteApi.dni;
    cliente.url = clienteApi._links.self.href;
    cliente.id = cliente.getId(cliente.url);

    return cliente;
  }

  getCliente(mascota: Mascota): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${mascota.id}/cliente/`);
  }

  getMascotasDeCliente(cliente: Cliente): Observable<any> {
    return this.http.get<any>(`${this.host}clientes/${cliente.id}/mascotas/`);
  }

  getPrestacionesIdMascota(id: string): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${id}/prestaciones`);
  }
  getPrestacionesMascota(mascota): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${mascota.id}/prestaciones`);
  }

  extraerPrestacionesMascota(respuestaApi: any): any[] {
    const prestaciones: any[] = [];

    if (respuestaApi._embedded.alojamientos) {
      respuestaApi._embedded.alojamientos.forEach(p => {
        prestaciones.push(p);
      });
    }
    if (respuestaApi._embedded.alimentaciones) {
      respuestaApi._embedded.alimentaciones.forEach(p => {
        prestaciones.push(p);
      });
    }
    return prestaciones;
  }

}
