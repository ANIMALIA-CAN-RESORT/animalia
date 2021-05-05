package es.puentes.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import residenciaAnimales.PrestacionImpl;

@RepositoryRestResource(path="prestaciones", itemResourceRel="prestacion", collectionResourceRel="prestaciones")
public interface PrestacionDAO extends JpaRepository<PrestacionImpl , String> {

}
