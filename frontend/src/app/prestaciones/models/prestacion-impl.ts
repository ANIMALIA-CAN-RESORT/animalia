import { Prestacion } from "./prestacion";

export class PrestacionImpl implements Prestacion {

  id: string;
  fechaEntrada: Date;
  fechaSalida: Date;
  pagada: boolean;
  tipoComida?: string;
  cantidadComidaDiaria?: number;
  jaula?: string;
  mascota: string;
  url: string;
  tipo: string;
  precioPrestacion: number;

  constructor(){}
  getId(url: string): string {
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
