package es.puentes.repositorios;

import java.util.Collection;

import javax.persistence.OneToMany;

import residenciaAnimales.Cliente;
import residenciaAnimales.Mascota;

public class ClienteConId extends Cliente {

	String Id;
	
	public String getId() {
		return Id;
	}
	
	@Override
	@OneToMany(targetEntity = MascotaConId.class)
	public Collection<Mascota> getMascotas() {
		return super.getMascotas();
	}
	
	public void addMascotaConId(MascotaConId mascota) {
		super.getMascotas().add(mascota);
		mascota.setPropietario(this);
	}
	
	public ClienteConId() {}
	
	public ClienteConId(String dni, String nombre, String apellido1, String apellido2, String tfno, String email) {
		super(dni, nombre, apellido1, apellido2, tfno, email);
	}
	@Override
	public String toString() {
		String string;
		try {
			string = super.toString();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
			string = "DatosCliente N/D => ";
		}		
		return string;
	}
}
