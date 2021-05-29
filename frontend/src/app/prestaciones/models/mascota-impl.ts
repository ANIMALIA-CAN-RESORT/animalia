import { Mascota } from "./mascota";

export class MascotaImpl implements Mascota {

  id: string;
  nombre: Date;
  raza: Date;
  talla: boolean;
  chip: string;
  url: string;

  constructor(){}
  getId(url: string): string {
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
