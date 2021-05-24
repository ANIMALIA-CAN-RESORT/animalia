package es.puentes.repositorios;

import java.util.List;

import es.puentes.entidades.PrestacionConId;
import es.puentes.residencia.Prestacion;

public interface PrestacionDAOCustom {

	List<PrestacionConId> getPrestacionesPagadas();
	List<PrestacionConId> getPrestacionesNoPagadas();

}
