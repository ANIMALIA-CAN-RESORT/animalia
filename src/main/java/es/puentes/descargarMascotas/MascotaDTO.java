package es.puentes.descargarMascotas;

public class MascotaDTO {

	public String nombre, chip, raza, talla, cliente, enlace;

	public MascotaDTO(String nombre, String chip, String raza, String talla, String cliente, String enlace) {
		super();
		this.nombre = nombre;
		this.chip = chip;
		this.raza = raza;
		this.talla = talla;
		this.cliente = cliente;
		this.enlace = enlace;
	}

	@Override
	public String toString() {
		return "MascotaDTO [nombre=" + nombre + ", chip=" + chip + ", raza=" + raza + ", talla=" + talla + ", cliente="
				+ cliente + ", enlace=" + enlace + "]";
	}
	

}