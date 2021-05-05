package es.puentes.repositorios;

import javax.persistence.PostLoad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.lanyu.commons.servicios.entidad.ServicioEntidad;

@Component
public class MascotaListener {

	public static ServicioEntidad servicioEntidad;
	
	@Autowired
	public void init(ServicioEntidad servicioEntidad) {
		MascotaListener.servicioEntidad = servicioEntidad;
	}
	@PostLoad
	void setServicioEntidadEnMascota(MascotaConId mascota) {
		mascota.setServicioEntidad(servicioEntidad);
	}
}
