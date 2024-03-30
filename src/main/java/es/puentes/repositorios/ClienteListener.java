package es.puentes.repositorios;

import jakarta.persistence.PostLoad;
import jakarta.persistence.PostRemove;
import jakarta.persistence.PostUpdate;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreRemove;
import jakarta.persistence.PreUpdate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.puentes.entidades.ClienteConId;

@Component
public class ClienteListener {

	private Logger log = LoggerFactory.getLogger(ClienteListener.class);
	private ClienteDAO clienteDAO;
	
	@Autowired
	public void init(ClienteDAO clienteDAO) {
		this.clienteDAO = clienteDAO;
	}
	
//	@PrePersist
//	public void preGuardar(ClienteConId cliente) {
//		System.err.println("Se va a guardar un cliente: " + cliente.getNombre());
//	}
	
	@PostRemove
	public void postBorrar(ClienteConId cliente) {
		System.err.println("Se ha borrado al cliente: " + cliente.getNombre());
	}
	
	@PostUpdate
	public void postActualizar(ClienteConId cliente) {
		System.err.println("Se ha actualizado actualizar al cliente: " + cliente.getNombre());
	}
	
//	@PostLoad
//	public void postGuardar(ClienteConId cliente) {
//		log.warn("has guardado un cliente: " + cliente.getNombre());
//	}
}



