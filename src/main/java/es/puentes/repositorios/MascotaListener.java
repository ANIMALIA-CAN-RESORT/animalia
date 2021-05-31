package es.puentes.repositorios;

import javax.persistence.PostLoad;
import javax.persistence.PostRemove;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.puentes.entidades.MascotaConId;


@Component
public class MascotaListener {

	private Logger log = LoggerFactory.getLogger(MascotaListener.class);
	private MascotaDAO mascotaDAO;
	
	@Autowired
	public void init(MascotaDAO mascotaDAO) {
		this.mascotaDAO = mascotaDAO;
	}
	
//	@PrePersist
//	public void preGuardar(MascotaConId mascota) {
//		System.err.println("Se va a guardar una mascota: " + mascota.getNombre());
//	}
	
	@PostRemove
	public void postBorrar(MascotaConId mascota) {
		System.err.println("Se va a borrar una mascota: " + mascota.getNombre());
	}
	
	@PreUpdate
	public void preActualizar(MascotaConId mascota) {
		System.err.println("Se va a actualizar una mascota: " + mascota.getNombre());
	}
	
//	@PostLoad
//	public void postGuardar(MascotaConId mascota) {
//		log.warn("has guardado una mascota: " + mascota.getNombre());
//	}
}



