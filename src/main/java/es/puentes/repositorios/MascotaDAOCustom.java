package es.puentes.repositorios;

import java.util.List;

import es.puentes.entidades.MascotaConId;
import es.puentes.entidades.PrestacionConId;
import es.puentes.residencia.Prestacion;


public interface MascotaDAOCustom {

	//List<MascotaConId> getMascotasDeCliente(String dniCliente); //no me gusta
	
	List<Prestacion> getPrestacionesPagadasDeMascota(String id);
	List<Prestacion> getPrestacionesNoPagadasDeMascota(String id);

}
