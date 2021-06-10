package es.puentes.facturas;

import java.io.PrintWriter;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import es.puentes.entidades.MascotaConId;
import es.puentes.entidades.PrestacionConId;
import es.puentes.repositorios.MascotaDAO;
import es.puentes.repositorios.PrestacionDAO;
import es.puentes.residencia.Prestacion;
import es.puentes.servicios.MailService;
import io.woo.htmltopdf.HtmlToPdf;
import io.woo.htmltopdf.HtmlToPdfObject;

@Configuration
@EnableScheduling
public class Descarga {

	private static PrestacionDAO prestacionDAO;
	private static MailService mail;
	@Autowired
	static SerializadorFactura serializador;
	@Value("${ruta.facturas}")
	String rutaFacturas;

	@Autowired
	public void init(MailService mail, PrestacionDAO prestacionDAO, SerializadorFactura serializador) {
		Descarga.mail = mail;
		Descarga.prestacionDAO = prestacionDAO;
		Descarga.serializador = serializador;
	}

	@Scheduled(cron = "0 0 4 * * MON-FRI")
	public List<PrestacionConId> generarFacturas(MascotaConId mascota) {
		List<PrestacionConId> prestaciones = prestacionDAO.findAll().stream().filter(j -> !j.isPagada() && mascota.equals(j.getMascota()))
				.collect(Collectors.toList());

		
		try {

				String html = serializador.generarFactura(prestaciones);
				PrintWriter printerHtml = new PrintWriter("resultado.html");
				printerHtml.write(html);
				printerHtml.close();

				HtmlToPdf.create().object(HtmlToPdfObject.forHtml(html))
						.convert(rutaFacturas + "factura-" + prestaciones.get(0).getMascota().getNombre() + "-" 
				+ prestaciones.get(0).getMascota().getCliente().getNombre() +"_" + prestaciones.get(0).getMascota().getCliente().getApellido1() +".pdf");

				mail.sendArchivo(
						prestaciones.get(0).getMascota().getCliente().getEmail(), "factura-" + prestaciones.get(0).getMascota().getNombre() 
						+ "-" + prestaciones.get(0).getMascota().getCliente().getNombre() +"_" + prestaciones.get(0).getMascota().getCliente().getApellido1() 
						+".pdf", "Buenos días " + prestaciones.get(0).getMascota().getCliente().getNombre() + ", /n Le envíamos la factura de las prestaciones disfrutadas por " 
						+ prestaciones.get(0).getMascota().getNombre(), rutaFacturas + "factura-" + prestaciones.get(0).getMascota().getNombre() + "-" 
						+ prestaciones.get(0).getMascota().getCliente().getNombre() +"_" + prestaciones.get(0).getMascota().getCliente().getApellido1() +".pdf");

			} catch (Exception e) {
				e.printStackTrace();
			}

		

		return prestaciones;
	}
}
