package es.puentes.rest;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

public class MixIns {
	
	@JsonPropertyOrder({ "dni", "nombre", "apellido1", "apellido2", "tfno", "email" })
	public static interface Clientes {
	}
	
	@JsonPropertyOrder({ "nombre", "chip", "talla", "raza" })
	public static interface Mascotas {
	}

}

