package es.puentes.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import residenciaAnimales.AlimentacionImpl;
import residenciaAnimales.PrestacionImpl;

@RepositoryRestResource(path="alimentaciones", itemResourceRel="alimentacion", collectionResourceRel="alimentaciones")
public interface AlimentacionDAO extends JpaRepository<AlimentacionImpl , String> {

}
