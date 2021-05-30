import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Mascota } from 'src/app/mascotas/models/mascota';
import { MascotaImpl } from 'src/app/mascotas/models/mascota-impl';
import { environment } from 'src/environments/environment';
import { Prestacion } from '../models/prestacion';
import { PrestacionImpl } from '../models/prestacion-impl';


@Injectable({
  providedIn: 'root'
})
export class PrestacionService {

  private host: string = environment.hostAnimalia;
  private urlEndPoint: string = `${this.host}prestaciones/`;

  constructor(
    private http: HttpClient) { }


  getPrestaciones(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPrestaciones(respuestaApi: any): Prestacion[] {
    const prestaciones: Prestacion[] = [];
    if (respuestaApi._embedded.alimentaciones) {
      respuestaApi._embedded.alimentaciones.forEach(p => {
        prestaciones.push(this.mapearPrestacion(p));
      });
    }
    if (respuestaApi._embedded.alojamientos) {
      respuestaApi._embedded.alojamientos.forEach(p => {
        prestaciones.push(this.mapearPrestacion(p));
      });
    }
    return prestaciones;
  }

  mapearPrestacion(prestacionApi: any): PrestacionImpl {
    const prestacion = new PrestacionImpl();
    prestacion.tipo = prestacionApi.tipo;
    prestacion.fechaEntrada = prestacionApi.fechaEntrada;
    prestacion.fechaSalida = prestacionApi.fechaSalida;
    prestacion.tipoComida = prestacionApi.tipoComida ? prestacionApi.tipoComida : '';
    prestacion.cantidadComidaDiaria = prestacionApi.cantidadComidaDiaria ? prestacionApi.cantidadComidaDiaria : '';
    prestacion.pagada = prestacionApi.pagada;
    prestacion.jaula = prestacionApi.jaula ? prestacionApi.jaula : '';
    prestacion.precioPrestacion = prestacionApi.precioPrestacion;
    prestacion.url = prestacionApi._links.self.href;
    prestacion.id = prestacion.getId(prestacion.url);
    prestacion.tipo = prestacionApi.jaula ? 'Alojamiento' : 'Alimentacion';

    return prestacion;
  }

  create(prestacion: Prestacion): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, prestacion).pipe(
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

  createAlojamiento(prestacion: Prestacion): Observable<any> {
    return this.http.post(`${this.host}alojamientos/`, prestacion).pipe(
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

  createAlimentacion(prestacion: Prestacion): Observable<any> {
    return this.http.post(`${this.host}alimentaciones/`, prestacion).pipe(
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

  delete(prestacion): Observable<Prestacion> {
    return this.http.delete<Prestacion>(`${this.urlEndPoint}${prestacion.id}`)
      .pipe(
        catchError((e) => {
          if (e.status === 405) {
            console.error('El metodo está bien hecho');
          }
          return throwError(e);
        })
      );
  }

  update(prestacion: Prestacion): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}${prestacion.id}`, prestacion)
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

  getPrestacion(id): Observable<any> {
    return this.http.get<Prestacion>(`${this.urlEndPoint}${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }


  getMascotas(): Observable<any> {
    return this.http.get<any>(`${this.host}mascotas/`);
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
    mascota.raza = mascotaApi.raza;
    mascota.talla = mascotaApi.talla;
    mascota.chip = mascotaApi.chip;
    mascota.url = mascotaApi._links.self.href;
    mascota.id = mascota.getId(mascota.url);

    return mascota;
  }

  getMascota(prestacion: Prestacion): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}${prestacion.id}/mascota/`);
  }

  getPrestacionesDeMascota(mascota: Mascota): Observable<any> {
    return this.http.get<any>(`${this.host}mascotas/${mascota.id}/prestaciones/`);
  }

}
