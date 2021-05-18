package es.puentes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.puentes.entidades.AlojamientoConId;

@RepositoryRestResource(path="alojamientos", collectionResourceRel="alojamientos", itemResourceRel="alojamiento")
public interface AlojamientoDAO extends JpaRepository<AlojamientoConId, Long> {

//	@RestResource(path="nombre")
//	List<AlojamientoConId> findAllById(Iterable<Long> ids);
	
}