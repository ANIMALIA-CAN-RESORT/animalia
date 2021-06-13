package es.puentes.facturas;

import java.io.PrintWriter;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import es.puentes.entidades.MascotaConId;
import es.puentes.entidades.PrestacionConId;
import es.puentes.repositorios.MascotaDAO;
import es.puentes.repositorios.PrestacionDAO;
import es.puentes.residencia.Prestacion;
import io.woo.htmltopdf.HtmlToPdf;
import io.woo.htmltopdf.HtmlToPdfObject;

@Configuration
public class Descargar {

	private static PrestacionDAO prestacionDAO;
	
	@Autowired
	static SerializadorFactura serializador;

	@Value("${ruta.facturas}")
	static String rutaFacturas = "src/main/resources/facturas/";

	static Date hoy = new Date();
	static String mes = (hoy.getMonth() +1 < 10) ? "0" + (hoy.getMonth() + 1) : (hoy.getMonth() + 1) + "";
	
	@Autowired
	public void init(PrestacionDAO prestacionDAO, SerializadorFactura serializador) {
		Descargar.prestacionDAO = prestacionDAO;
		Descargar.serializador = serializador;
	}
	
	public static List<PrestacionConId> generarFacturas(Long id) {

		List<PrestacionConId> prestaciones = prestacionDAO.findAll().stream().filter(p -> p.getMascota().getId() == id).collect(Collectors.toList());
			
			try {

				String html = serializador.generarFactura(prestaciones);
				PrintWriter printerHtml = new PrintWriter("factura.html");
				printerHtml.write(html);
				printerHtml.close();

				HtmlToPdf.create().object(HtmlToPdfObject.forHtml(html))
						.convert(rutaFacturas + "Factura_" + (1900 + hoy.getYear()) + mes + hoy.getDate() + "_" + prestaciones.get(0).getMascota().getCliente().getDni().toUpperCase() + "_" + prestaciones.get(0).getMascota().getNombre() + ".pdf");
				

			} catch (Exception e) {
				e.printStackTrace();
			}

		return prestaciones;
	}

}
