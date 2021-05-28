import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Prestacion } from '../models/prestacion';
import { PrestacionImpl } from '../models/prestacion-impl';


@Injectable({
  providedIn: 'root'
})
export class PrestacionService {

  private host: string = environment.hostAnimalia;
  private urlEndPoint: string = `${this.host}prestaciones/`;
  private urlEndPointAlojamiento: string = `${this.host}alojamientos/`;
  private urlEndPointAlimentacion: string = `${this.host}alimentaciones/`;


  constructor(
    private http: HttpClient) { }


  getPrestaciones(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  extraerPrestaciones(respuestaApi: any): Prestacion[] {
    const prestaciones: Prestacion[] = [];
    respuestaApi._embedded.alimentaciones.forEach(p => {
      prestaciones.push(this.mapearAlimentacion(p));
    });
    respuestaApi._embedded.alojamientos.forEach(p => {
      prestaciones.push(this.mapearAlojamiento(p));
    });
    return prestaciones;
  }

  mapearAlimentacion(prestacionApi: any): PrestacionImpl {
    const prestacion = new PrestacionImpl();
    prestacion.fechaEntrada = prestacionApi.fechaEntrada;
    prestacion.fechaSalida = prestacionApi.fechaSalida;
    prestacion.pagada = prestacionApi.pagada;
    prestacion.url = prestacionApi._links.self.href;
    prestacion.tipoComida = prestacionApi.tipoComida;
    prestacion.tipo = "Alimentacion";
    prestacion.cantidadComidaDiaria = prestacionApi.cantidadComidaDiaria;
    prestacion.precioPrestacion = prestacionApi.email;
    prestacion.id = prestacion.getId(prestacion.url);

    return prestacion;
  }

  mapearAlojamiento(prestacionApi: any): PrestacionImpl {
    const prestacion = new PrestacionImpl();
    prestacion.fechaEntrada = prestacionApi.fechaEntrada;
    prestacion.fechaSalida = prestacionApi.fechaSalida;
    prestacion.pagada = prestacionApi.pagada;
    prestacion.url = prestacionApi._links.self.href;
    prestacion.jaula = prestacionApi.jaula;
    prestacion.tipo = "Alojamiento";
    prestacion.precioPrestacion = prestacionApi.email;
    prestacion.id = prestacion.getId(prestacion.url);

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
    return this.http.post(`${this.urlEndPointAlojamiento}`, prestacion).pipe(
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
    return this.http.post(`${this.urlEndPointAlimentacion}`, prestacion).pipe(
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
}
