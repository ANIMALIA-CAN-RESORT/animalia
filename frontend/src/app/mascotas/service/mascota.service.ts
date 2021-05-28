import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mascota } from '../models/mascota';
import { MascotaImpl } from '../models/mascota-impl';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {


  private host: string = environment.hostAnimalia;
  private urlEndPoint: string = `${this.host}clientes/`;

  constructor(
    private http: HttpClient) { }

  getPrestacionesMascota(mascota): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${mascota.id}/mascotas`);
  }

  extraerPrestacionesMascota(respuestaApi: any): any[] {
    const prestaciones: any [] = [];
    respuestaApi._embedded.mascotas.forEach(p => {
      prestaciones.push(p);

    });
    return prestaciones;
  }
  getMascotas(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerMascotas(respuestaApi: any): Mascota[] {
    const mascotas: Mascota[] = [];
    respuestaApi._embedded.clientes.forEach(m => {
      mascotas.push(this.mapearMascota(m));

    });
    return mascotas;
  }

  mapearMascota(mascotaApi: any): MascotaImpl {
    const mascota = new MascotaImpl();
    mascota.nombre = mascotaApi.nombre;
    mascota.apellido1 = mascotaApi.apellido1;
    mascota.apellido2 = mascotaApi.apellido2;
    mascota.dni = mascotaApi.dni;
    mascota.tfno = mascotaApi.tfno;
    mascota.email = mascotaApi.email;
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
}
