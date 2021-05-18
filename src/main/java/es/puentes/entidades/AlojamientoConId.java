package es.puentes.entidades;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import es.puentes.repositorios.AlojamientoListener;
import es.puentes.repositorios.ClienteListener;
import es.puentes.residencia.Alojamiento;
import es.puentes.residencia.Cliente;
import es.puentes.residencia.Mascota;


@Entity
@EntityListeners(AlojamientoListener.class)
@Table(name="ALOJAMIENTOS")
@DiscriminatorValue("AJ")
public class AlojamientoConId extends PrestacionConId implements Alojamiento {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique=true)
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

//	@Override
//	@OneToMany(targetEntity = MascotaConId.class)
//	public Collection<Mascota> getMascotas() {
//		return super.getMascotas();
//	}
//	
//	// Establece la relacion en los dos sentidos
//	public void addMascotaConId(MascotaConId mascota) {
//		super.getMascotas().add(mascota);
//		mascota.setCliente(this);
//	}

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
