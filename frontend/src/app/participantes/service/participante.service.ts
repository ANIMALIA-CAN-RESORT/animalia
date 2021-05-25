import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Participante } from "../models/participante";
import { ParticipanteImpl } from "../models/participante-impl";

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {
  host: string = environment.hostDatosDeportivos;
  urlEndPoint: string = `${this.host}/participantes/`;

  constructor(private http: HttpClient) { }


  getParticipantes(): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}?page=0&size=1000`);//con lo ultimo le digo que me muestre 1000 participantes. sino saldria solo la primera pagina
  }

  extraerParticipantes(respuestaApi: any): Participante[] {
    const participantes: Participante[] = [];
    let participanteMapeado: Participante;
    respuestaApi._embedded.participantes.forEach(p => {//como la respuesta de la api me da un objeto..., voy entrando en las propiedades del mismo hasta que llego al array de participantes
      participanteMapeado = this.mapearParticipante(p);
      participantes.push(participanteMapeado);
    });
    return participantes;
  }

  mapearParticipante(participanteAPI): ParticipanteImpl {
    const participante: ParticipanteImpl = new ParticipanteImpl();
    participante.id = participanteAPI.id;
    participante.nombre = participanteAPI.nombre;
    return participante;
  }

  create(participante: Participante): Observable<any> {
    return this.http.post(`${this.urlEndPoint}`, participante).pipe(
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

  delete(id: string): Observable<Participante> {
    return this.http.delete<Participante>(`${this.urlEndPoint}${id}`)
      .pipe(
        catchError((e) => {
          if (e.status === 405) {
            console.error('El jefe no permite que borres en su api, pero el metodo está bien hecho');
          }
          return throwError(e);
        })
      );
  }

  update(participante: Participante): Observable<any> {
    return this.http
      .put<any>(`${this.urlEndPoint}/${participante.id}`, participante)
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

  getParticipante(id): Observable<any> {
    return this.http.get<Participante>(`${this.urlEndPoint}/${id}`).pipe(
      catchError((e) => {
        if (e.status !== 401 && e.error.mensaje) {
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }

}

