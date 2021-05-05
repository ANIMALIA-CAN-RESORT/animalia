package es.puentes.repositorios;

import java.util.Collection;

import javax.persistence.EntityListeners;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import es.lanyu.commons.servicios.entidad.ServicioEntidad;
import residenciaAnimales.Mascota;
import residenciaAnimales.Prestacion;

@EntityListeners(MascotaListener.class)
public class MascotaConId extends Mascota {
	
	String id;
	
	@ManyToOne
	ClienteConId cliente;
	
	public String getId() {
		return id;
	}
	
	public ClienteConId getPropietario() {
		return cliente;
	}
	
	public void setPropietario(ClienteConId cliente) {
		this.cliente = cliente;
	}
	
	@Override
	@OneToMany(targetEntity = PrestacionConId.class)
	public Collection<Prestacion> getPrestaciones() {
		return super.getPrestaciones();
	}
	
	public void addPrestacionConId(PrestacionConId prestacion) {
		super.getPrestaciones().add(prestacion);
		prestacion.setMascota(this);
	}
	
	public MascotaConId() {}
	
	public MascotaConId(ServicioEntidad servicioEntidad) {
		this.servicioEntidad = servicioEntidad;
	}
	
	public void setServicioEntidad(ServicioEntidad servicioEntidad) {
		this.servicioEntidad = servicioEntidad;
	}
}
