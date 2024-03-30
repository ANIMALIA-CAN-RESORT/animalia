package es.puentes.repositorios;

import java.util.List;

import es.puentes.entidades.PrestacionConId;


public interface MascotaDAOCustom {

	List<PrestacionConId> getPrestacionesPagadasDeMascota(Long id);
	List<PrestacionConId> getPrestacionesNoPagadasDeMascota(Long id);

}
