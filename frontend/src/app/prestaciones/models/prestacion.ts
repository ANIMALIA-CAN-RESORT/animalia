export interface Prestacion {

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

}
