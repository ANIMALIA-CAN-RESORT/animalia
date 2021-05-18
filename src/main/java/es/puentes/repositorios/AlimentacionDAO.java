package es.puentes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.puentes.entidades.AlimentacionConId;
import es.puentes.entidades.PrestacionConId;

@RepositoryRestResource(path="alimentaciones", collectionResourceRel="alimentaciones", itemResourceRel="alimentacion")
public interface AlimentacionDAO extends JpaRepository<AlimentacionConId, Long> {

//	@RestResource(path="nombre")
//	List<AlimentacionConId> findAllById(Iterable<Long> ids);
	
}
