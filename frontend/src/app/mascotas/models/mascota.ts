import { ClienteImpl } from "src/app/clientes/models/cliente-impl";

export interface Mascota {
  id: string;
  nombre: string;
  chip: string;
  talla: string;
  raza: string;
  cliente: ClienteImpl;
  prestaciones: any[];
}
