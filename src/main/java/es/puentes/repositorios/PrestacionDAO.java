package es.puentes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.puentes.entidades.PrestacionConId;

@RepositoryRestResource(path="prestaciones", collectionResourceRel="prestaciones", itemResourceRel="prestacion")
public interface PrestacionDAO extends JpaRepository<PrestacionConId, Long> {

//	@RestResource(path="nombre")
//	List<PrestacionConId> findAllById(Iterable<Long> ids);
	
}
