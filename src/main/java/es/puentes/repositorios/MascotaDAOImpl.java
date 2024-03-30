package es.puentes.repositorios;

import java.util.List;
import java.util.stream.Collectors;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.puentes.entidades.PrestacionConId;

@Transactional(readOnly = true)
public class MascotaDAOImpl implements MascotaDAOCustom {

	@Autowired
	MascotaDAO mascotaDAO;
	

	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public List<PrestacionConId> getPrestacionesPagadasDeMascota(Long id) {

		List<PrestacionConId> prestaciones = mascotaDAO.findById(id).get().getPrestaciones().stream().filter(j -> j.isPagada() == true)
				.collect(Collectors.toList());

		return prestaciones;
	}

	@Override
	public List<PrestacionConId> getPrestacionesNoPagadasDeMascota(Long id) {

		List<PrestacionConId> prestaciones = mascotaDAO.findById(id).get().getPrestaciones().stream().filter(j -> j.isPagada() == false)
				.collect(Collectors.toList());

		return prestaciones;
	}
}
