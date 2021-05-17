import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mascota } from '../models/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  host: string = environment.host;
  urlEndPoint: string = `${this.host}mascotas/`;

  constructor(private http: HttpClient) { }


  getMascotas(): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}?page=0&size=1000`);//con lo ultimo le digo que me muestre 1000 mascotas. sino saldria solo la primera pagina
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

  delete(id: string): Observable<Mascota> {
    return this.http.delete<Mascota>(`${this.urlEndPoint}${id}`)
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
      .put<any>(`${this.urlEndPoint}/${mascota.id}`, mascota)
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
    return this.http.get<Mascota>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}
