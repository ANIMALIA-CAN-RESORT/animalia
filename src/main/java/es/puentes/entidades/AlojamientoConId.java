package es.puentes.entidades;


import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;

import javax.persistence.Table;

import es.puentes.repositorios.AlojamientoListener;
import es.puentes.residencia.Alojamiento;


@Entity
@EntityListeners(AlojamientoListener.class)
@Table(name="ALOJAMIENTOS")
@DiscriminatorValue("AJ")
public class AlojamientoConId extends PrestacionConId implements Alojamiento {

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(unique=true)
	private long id;
	@Column(name="JAULA")
	int idJaula;
	private final static float PRECIO_DIA = 15;
	
	public AlojamientoConId() {
		super();
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public int getIdJaula() {
		return idJaula;
	}
	
	public void setIdJaula(int idJaula) {
		this.idJaula = idJaula;
	}

	@Override
	public float getPrecioDia() {
		return PRECIO_DIA;
	}
}
