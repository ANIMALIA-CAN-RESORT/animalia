package es.puentes.entidades;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import es.puentes.repositorios.AlojamientoListener;

@Entity
@EntityListeners(AlojamientoListener.class)
@DiscriminatorValue("AJ")
@Component
public class AlojamientoConId extends PrestacionConId {

	private String jaula;
	
	private static float precioDia = 15;
	
	public AlojamientoConId() {
		super();
	}

	@Autowired
	public AlojamientoConId(@Qualifier("precioAlojamiento") float precioDia) {
		AlojamientoConId.precioDia = precioDia;
	}
	
	public String getJaula() {
		return jaula;
	}
	
	public void setIdJaula(String jaula) {
		this.jaula = jaula;
	}

	@Override
	public float getPrecioDia() {
		return precioDia;
	}
}
