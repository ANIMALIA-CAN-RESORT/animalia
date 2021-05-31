package es.puentes.repositorios;

import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import es.puentes.entidades.MascotaConId;
import es.puentes.entidades.PrestacionConId;
import es.puentes.residencia.Prestacion;


public interface MascotaDAOCustom {

	//List<MascotaConId> getMascotasDeCliente(String dniCliente); //no me gusta
	
	List<Prestacion> getPrestacionesPagadasDeMascota(Long id);
	List<Prestacion> getPrestacionesNoPagadasDeMascota(Long id);

//	List<MascotaConId> filtrarMascotas(String nombre);
}
