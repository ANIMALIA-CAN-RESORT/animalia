import { Mascota } from "./mascota";

export class MascotaImpl implements Mascota {

  id: string;
  nombre: string;
  raza: string;
  talla: string;
  chip: string;
  prestaciones: any[];
  cliente:string;
  url: string;

  constructor(){}
  
  getId(url: string): string {
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }

}
