package es.puentes.repositorios;

import javax.persistence.PostLoad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.lanyu.commons.servicios.entidad.ServicioEntidad;

@Component
public class PrestacionListener {

	public static ServicioEntidad servicioEntidad;
	
	@Autowired
	public void init(ServicioEntidad servicioEntidad) {
		PrestacionListener.servicioEntidad = servicioEntidad;
	}
	
	@PostLoad
	void setServicioEntidadEnPrestacion(PrestacionConId prestacion) {
		prestacion.setServicioEntidad(servicioEntidad);
	}
}
