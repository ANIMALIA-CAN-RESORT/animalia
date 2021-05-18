package es.puentes.repositorios;

import javax.persistence.PostLoad;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.puentes.entidades.AlojamientoConId;



@Component
public class AlojamientoListener {

	private Logger log = LoggerFactory.getLogger(AlojamientoListener.class);
	private AlojamientoDAO alojamientoDAO;
	
	@Autowired
	public void init(AlojamientoDAO alojamientoDAO) {
		this.alojamientoDAO = alojamientoDAO;
	}
	
	@PrePersist
	public void preGuardar(AlojamientoConId alojamiento) {
		System.err.println("Se va a guardar un alojamiento: " + alojamiento.getFechaEntrada() + " - " + alojamiento.getFechaSalida());
	}
	
	@PreRemove
	public void preBorrar(AlojamientoConId alojamiento) {
		System.err.println("Se va a borrar un alojamiento: " + alojamiento.getFechaEntrada() + " - " + alojamiento.getFechaSalida());
	}
	
	@PreUpdate
	public void preActualizar(AlojamientoConId alojamiento) {
		System.err.println("Se va a actualizar un alojamiento: " + alojamiento.getFechaEntrada() + " - " + alojamiento.getFechaSalida());
	}
	
	@PostLoad
	public void postGuardar(AlojamientoConId alojamiento) {
		log.warn("has guardado un alojamiento: " + alojamiento.getFechaEntrada() + " - " + alojamiento.getFechaSalida());
	}
}



