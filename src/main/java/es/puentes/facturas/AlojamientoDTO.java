package es.puentes.facturas;

import java.time.Instant;

import es.puentes.entidades.MascotaConId;

public class AlojamientoDTO extends PrestacionDTO {

	public String jaula;
	public final static float PRECIO_DIA = 15;
	
	public AlojamientoDTO() {}
	
	public AlojamientoDTO(Instant fechaEntrada, Instant fechaSalida, String jaula, MascotaConId mascota, String enlace) {
		
		super();
		this.fechaEntrada = fechaEntrada;
		this.fechaSalida = fechaSalida;
		this.mascota = mascota;
		this.tipo = "Alojamiento";
		this.jaula = jaula;
		this.enlace = enlace;

	}
}
