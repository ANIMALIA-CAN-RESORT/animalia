import { Cliente } from "./cliente";

export class ClienteImpl implements Cliente {
  id: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  dni: string;
  tfno: string;
  email: string;
  mascotas: any[];
  url:string;

  constructor() { }

}