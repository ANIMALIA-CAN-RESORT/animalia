package es.puentes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.puentes.entidades.PrestacionConId;

@RepositoryRestResource(path="prestaciones", collectionResourceRel="prestaciones", itemResourceRel="prestacion")
public interface PrestacionDAO extends JpaRepository<PrestacionConId, String>, PrestacionDAOCustom {

//	@RestResource(path="entre-fechas")
//	List<PrestacionConId> findByTemporalBetween(Instant comienzo, Instant fin);

	@RestResource(path="por-id")
	List<PrestacionConId> findAllById(String id);
	
    @RestResource(exported=false)
    void deleteById(String id);

    @RestResource(exported=false)
    void delete(PrestacionConId entity);
}
