package es.puentes.entidades;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import es.puentes.residencia.Mascota;

@Entity
@Table(name="MASCOTAS")
public class MascotaConId extends Mascota {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "CLIENTE")
	private ClienteConId cliente;
	
	public Long getId() {
		return id;
	}
	
	public ClienteConId getCliente() {
		return cliente;
	}
	
	public void setCliente(ClienteConId cliente) {
		this.cliente = cliente;
	}
	
	public MascotaConId() {}
}
