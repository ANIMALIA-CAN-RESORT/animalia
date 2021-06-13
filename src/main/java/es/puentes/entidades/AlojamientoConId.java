package es.puentes.entidades;


import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;

import org.springframework.beans.factory.annotation.Autowired;

import es.puentes.repositorios.AlojamientoListener;
import es.puentes.residencia.Alojamiento;

@Entity
@EntityListeners(AlojamientoListener.class)
@DiscriminatorValue("AJ")
public class AlojamientoConId extends PrestacionConId implements Alojamiento {

	private String jaula;
	
//	@Value("${alojamiento.precio-dia}")
	private final static float PRECIO_DIA = 15;
	
	public AlojamientoConId() {
		super();
	}

	@Override
	public String getJaula() {
		return jaula;
	}
	
	public void setIdJaula(String jaula) {
		this.jaula = jaula;
	}

	@Override
	public float getPrecioDia() {
		return PRECIO_DIA;
	}
}
