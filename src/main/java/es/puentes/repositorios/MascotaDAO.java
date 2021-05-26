package es.puentes.repositorios;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;

import es.puentes.entidades.MascotaConId;

@RepositoryRestResource(path="mascotas", collectionResourceRel="mascotas", itemResourceRel="mascota")
public interface MascotaDAO extends JpaRepository<MascotaConId, String>, MascotaDAOCustom {

	@RestResource(path="nombre")
	List<MascotaConId> findByNombreContaining(@Param("nombre") String txt);
}
