package es.puentes.facturas;

import java.time.Instant;

import es.puentes.entidades.MascotaConId;

public class PrestacionDTO {

	public MascotaConId mascota;
	public Instant fechaEntrada, fechaSalida;
	public String tipo, jaula, tipoComida, enlace;
	public float cantidadComidaDiaria;
	public final static float PRECIO_NORMAL_CINCUENTA = 2.5f;
	public final static float PRECIO_PREMIUM_CINCUENTA = 3.5f;
	public final static float PRECIO_DIA = 15;
	
	public PrestacionDTO() {}
	
	public PrestacionDTO(Instant fechaEntrada, Instant fechaSalida,  
			MascotaConId mascota, String enlace) {
		
		super();
		this.fechaEntrada = fechaEntrada;
		this.fechaSalida = fechaSalida;
		this.mascota = mascota;
		this.enlace = enlace;

	}
	
	public PrestacionDTO(Instant fechaEntrada, Instant fechaSalida,  
			String tipoComida, float cantidadComidaDiaria, MascotaConId mascota, String enlace) {
		
		super();
		this.fechaEntrada = fechaEntrada;
		this.fechaSalida = fechaSalida;
		this.mascota = mascota;
		this.tipo = "Alimentacion";
		this.tipoComida = tipoComida;
		this.cantidadComidaDiaria = cantidadComidaDiaria;
		this.enlace = enlace;

	}
	
	public PrestacionDTO(Instant fechaEntrada, Instant fechaSalida, String jaula, MascotaConId mascota, String enlace) {
		
		super();
		this.fechaEntrada = fechaEntrada;
		this.fechaSalida = fechaSalida;
		this.mascota = mascota;
		this.tipo = "Alojamiento";
		this.jaula = jaula;
		this.enlace = enlace;

	}
}
