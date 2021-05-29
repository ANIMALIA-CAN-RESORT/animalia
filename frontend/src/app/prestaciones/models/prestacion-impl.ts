import { Prestacion } from "./prestacion";

export class PrestacionImpl implements Prestacion {

  id: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  dni: string;
  tfno: string;
  email: string;
  mascotas: any[];
  url: string;

  constructor(){}
  getId(url: string): string {
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
