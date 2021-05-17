import { Mascota } from "src/app/mascotas/models/mascota";

export interface Cliente {
  id: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  dni: string;
  telefono: string;
  email: string;
  mascotas: Mascota[];
}