package es.puentes.facturas;

import java.io.PrintWriter;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import es.puentes.entidades.PrestacionConId;
import es.puentes.repositorios.PrestacionDAO;
import es.puentes.servicios.MailService;
import io.woo.htmltopdf.HtmlToPdf;
import io.woo.htmltopdf.HtmlToPdfObject;

@Configuration
public class Descargar {

	private static PrestacionDAO prestacionDAO;
	private static MailService mail;
	
	@Autowired
	static SerializadorFactura serializador;

	@Value("${ruta.facturas}")
	static String rutaFacturas = "src/main/resources/facturas/";

	static Date hoy = new Date();
	static String mes = (hoy.getMonth() +1 < 10) ? "0" + (hoy.getMonth() + 1) : (hoy.getMonth() + 1) + "";
	
	@Autowired
	public void init(MailService mail, PrestacionDAO prestacionDAO, SerializadorFactura serializador) {
		Descargar.prestacionDAO = prestacionDAO;
		Descargar.serializador = serializador;
		Descargar.mail = mail;
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
				
				mail.sendArchivo(
						prestaciones.get(0).getMascota().getCliente().getEmail(), "factura-" + prestaciones.get(0).getMascota().getNombre() 
						+ "-" + prestaciones.get(0).getMascota().getCliente().getNombre() +"_" + prestaciones.get(0).getMascota().getCliente().getApellido1() 
						+".pdf", "Buenos días " + prestaciones.get(0).getMascota().getCliente().getNombre() + ",<br><br> Le envíamos la factura de las prestaciones disfrutadas por " 
						+ prestaciones.get(0).getMascota().getNombre() + ".", rutaFacturas + "Factura_" + (1900 + hoy.getYear()) + mes + hoy.getDate() + "_" + prestaciones.get(0).getMascota().getCliente().getDni().toUpperCase() + "_" + prestaciones.get(0).getMascota().getNombre() + ".pdf");
				System.err.println("Factura enviada a " + prestaciones.get(0).getMascota().getCliente().getEmail());

			} catch (Exception e) {
				e.printStackTrace();
			}

		return prestaciones;
	}

}
