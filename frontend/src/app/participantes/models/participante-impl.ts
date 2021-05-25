import { Participante } from './participante';

export class ParticipanteImpl implements Participante {
  id: string;
  nombre: string;

  constructor() { }

  getId(): string {
    return this.id;
  }

  getNombre(): string {
    return this.nombre;
  }
}
