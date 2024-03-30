package es.puentes.entidades;

import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import es.puentes.repositorios.MascotaListener;

@Entity
@EntityListeners(MascotaListener.class)
@Table(name = "MASCOTAS")
public class MascotaConId  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	Long id;
	private String nombre;
	private String chip;
	private String raza;
	private String talla;// será "S", "M", "L", "XL"

	@OneToMany(cascade = CascadeType.ALL, targetEntity = PrestacionConId.class, mappedBy = "mascota")
	private Collection<PrestacionConId> prestaciones = new ArrayList<PrestacionConId>();

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "CLIENTE", nullable = false)
	private ClienteConId cliente;

	public MascotaConId() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ClienteConId getCliente() {
		return cliente;
	}

	public void setCliente(ClienteConId cliente) {
		this.cliente = cliente;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getChip() {
		return chip;
	}

	public void setChip(String chip) {
		this.chip = chip;
	}

	public String getRaza() {
		return raza;
	}

	public void setRaza(String raza) {
		this.raza = raza;
	}

	public String getTalla() {
		return talla;
	}

	public void setTalla(String talla) {
		this.talla = talla;
	}

	public Collection<PrestacionConId> getPrestaciones() {
		return prestaciones;
	}

	public void setPrestaciones(Collection<PrestacionConId> prestaciones) {
		this.prestaciones = prestaciones;
	}

	public void addPrestacionConId(PrestacionConId prestacion) {
		getPrestaciones().add(prestacion);
		prestacion.setMascota(this);
	}
}
