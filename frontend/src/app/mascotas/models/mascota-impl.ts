import { ClienteImpl } from "src/app/clientes/models/cliente-impl";
import { Mascota } from "./mascota";

export class MascotaImpl implements Mascota {
  id: string;
  nombre: string;
  chip: string;
  talla: string;
  raza: string;
  propietario: ClienteImpl;

}
