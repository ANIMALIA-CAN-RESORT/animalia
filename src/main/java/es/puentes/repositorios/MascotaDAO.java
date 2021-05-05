package es.puentes.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import residenciaAnimales.Mascota;

@RepositoryRestResource(path="mascotas", itemResourceRel="mascota", collectionResourceRel="mascotas")
public interface MascotaDAO extends JpaRepository<MascotaConId, String> {

}
