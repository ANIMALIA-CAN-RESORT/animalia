package es.puentes.repositorios;

import java.time.Instant;

import javax.persistence.EntityListeners;
import javax.persistence.ManyToOne;

import es.lanyu.commons.servicios.entidad.ServicioEntidad;
import residenciaAnimales.PrestacionImpl;

@EntityListeners(PrestacionListener.class)
public class PrestacionConId extends PrestacionImpl {

	@ManyToOne
	MascotaConId mascota;
	
	public MascotaConId getMascota() {
		return mascota;
	}
	
	public void setMascota(MascotaConId mascota) {
		this.mascota = mascota;
	}
	
	public PrestacionConId() {}
	
	public PrestacionConId(Instant fechaEntrada, Instant fechaSalida) {
		super(fechaEntrada, fechaSalida);
	}

	public PrestacionConId(ServicioEntidad servicioEntidad) {
		this.servicioEntidad = servicioEntidad;
	}
	
	public void setServicioEntidad(ServicioEntidad servicioEntidad) {
		this.servicioEntidad = servicioEntidad;
	}
	
	@Override
	public float getPrecioDia() {
		return 0;
	}

}
