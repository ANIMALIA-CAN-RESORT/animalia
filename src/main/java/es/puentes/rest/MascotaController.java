package es.puentes.rest;

import java.util.List;

import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.puentes.entidades.MascotaConId;
import es.puentes.repositorios.MascotaDAO;

@RepositoryRestController
@RequestMapping(path = "/mascotas/search")
public class MascotaController {

	private MascotaDAO mascotaDAO;

	public MascotaController(MascotaDAO mascotaDAO) {
		this.mascotaDAO = mascotaDAO;
	}

//	@GetMapping("/con-cliente")
//	@ResponseBody
//	public CollectionModel<PersistentEntityResource> getMascotasDeCliente(@RequestParam String dniCliente,
//			PersistentEntityResourceAssembler assembler) {
//
//		List<MascotaConId> mascotas = mascotaDAO.getMascotasDeCliente(dniCliente);
//
//		return assembler.toCollectionModel(mascotas);
//	} no m gusta
}
