package es.puentes.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import residenciaAnimales.PrestacionImpl;

@RepositoryRestResource(path="alojamientos", itemResourceRel="alojamiento", collectionResourceRel="alojamientos")
public interface Alojamiento extends JpaRepository<residenciaAnimales.Alojamiento , String> {

}
