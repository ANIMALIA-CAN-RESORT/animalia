package es.puentes.repositorios;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import es.puentes.residencia.Prestacion;

@Transactional(readOnly = true)
public class MascotaDAOImpl implements MascotaDAOCustom {

	@Autowired
	MascotaDAO mascotaDAO;
	

	@PersistenceContext
	EntityManager entityManager;
	
	@Override
	public List<Prestacion> getPrestacionesPagadasDeMascota(String id) {

		List<Prestacion> prestaciones = mascotaDAO.findById(id).get().getPrestaciones().stream().filter(j -> j.isPagada() == true)
				.collect(Collectors.toList());

		return prestaciones;
	}

	@Override
	public List<Prestacion> getPrestacionesNoPagadasDeMascota(String id) {

		List<Prestacion> prestaciones = mascotaDAO.findById(id).get().getPrestaciones().stream().filter(j -> j.isPagada() == false)
				.collect(Collectors.toList());

		return prestaciones;
	}
	
	
//	@Override
//	public List<MascotaConId> getMascotasDeCliente(String dniCliente) {
//		List<MascotaConId> mascotas = mascotaDAO.findAll().stream().filter(j -> j.getCliente().getDni().equals(dniCliente))
//				.collect(Collectors.toList());
//		return mascotas;
//	} 
	//no me gusta

}
