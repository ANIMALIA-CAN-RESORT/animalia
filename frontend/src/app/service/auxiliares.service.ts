import { Injectable } from "@angular/core";

@Injectable({//los parentesis del string que es id no van bien en navegador. creamos este servicio para convertirlos... en algo q no falle.
  providedIn: 'root'
})
export class AuxiliaresService {

  constructor() { }
  formatearId(texto: string): string {
    texto = texto.replace('(', '-');
    return texto.replace(')', '_');
  }

  recuperarId(texto: string): string {
    if (texto != null) {
      texto = texto.replace('-', '(');
      texto = texto.replace('_', ')');
    } else {
      texto = ' ';//REMEDIO RAPIDO PARA QUE NO SALGA ERROR EN LA CONSOLA CUANDO VOY A CREAR UN PARTICIPNATE
    }

    return texto;
  }
}
