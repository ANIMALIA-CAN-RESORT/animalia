package es.puentes.facturas;

import java.time.Instant;

import es.puentes.entidades.MascotaConId;

public class AlimentacionDTO extends PrestacionDTO {

	public String tipoComida;
	public float cantidadComidaDiaria;
	public final static float PRECIO_NORMAL_CINCUENTA = 2.5f;
	public final static float PRECIO_PREMIUM_CINCUENTA = 3.5f;
	
	public AlimentacionDTO() {}
	
	public AlimentacionDTO(Instant fechaEntrada, Instant fechaSalida,  
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

}
