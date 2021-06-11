package es.puentes.facturas;

import java.time.Instant;

import es.puentes.entidades.MascotaConId;

public class PrestacionDTO {

	public MascotaConId mascota;
	public Instant fechaEntrada, fechaSalida;
	public String tipo, enlace;
	
	public PrestacionDTO() {}
	
	public PrestacionDTO(Instant fechaEntrada, Instant fechaSalida,  
			MascotaConId mascota, String enlace) {
		
		super();
		this.fechaEntrada = fechaEntrada;
		this.fechaSalida = fechaSalida;
		this.mascota = mascota;
		this.enlace = enlace;

	}
	
}
