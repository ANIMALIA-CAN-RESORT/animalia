package es.puentes.facturas;

import java.io.PrintWriter;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import es.puentes.entidades.AlimentacionConId;
import es.puentes.entidades.AlojamientoConId;
import es.puentes.entidades.MascotaConId;
import es.puentes.entidades.PrestacionConId;
import es.puentes.repositorios.AlimentacionDAO;
import es.puentes.repositorios.AlojamientoDAO;
import es.puentes.repositorios.MascotaDAO;
import es.puentes.repositorios.PrestacionDAO;
import es.puentes.residencia.Prestacion;
import es.puentes.servicios.MailService;
import io.woo.htmltopdf.HtmlToPdf;
import io.woo.htmltopdf.HtmlToPdfObject;

@Configuration
@EnableScheduling
public class Descarga {

	private static AlimentacionDAO alimentacionDAO;
	private static AlojamientoDAO alojamientoDAO;
	private static MailService mail;
	@Autowired
	static SerializadorFactura serializador;
	@Value("${ruta.facturas}")
	String rutaFacturas;

	@Autowired
	public void init(MailService mail, AlimentacionDAO alimentacionDAO, AlojamientoDAO alojamientoDAO, SerializadorFactura serializador) {
		Descarga.mail = mail;
		Descarga.alimentacionDAO = alimentacionDAO;
		Descarga.alojamientoDAO = alojamientoDAO;
		Descarga.serializador = serializador;
	}

	@Scheduled(cron = "0 0 4 * * MON-FRI")
	public List<PrestacionConId> generarFacturas(MascotaConId mascota) {
		List<AlimentacionConId> alimentaciones = alimentacionDAO.findAll().stream().filter(j -> !j.isPagada() && mascota.equals(j.getMascota()))
				.collect(Collectors.toList());
		List<AlojamientoConId> alojamientos = alojamientoDAO.findAll().stream().filter(j -> !j.isPagada() && mascota.equals(j.getMascota()))
				.collect(Collectors.toList());
		List<PrestacionConId> prestaciones = Stream.concat(alimentaciones.stream(), alojamientos.stream()).collect(Collectors.toList());
		try {

				String html = serializador.generarFactura(alimentaciones, alojamientos);
				PrintWriter printerHtml = new PrintWriter("resultado.html");
				printerHtml.write(html);
				printerHtml.close();

				HtmlToPdf.create().object(HtmlToPdfObject.forHtml(html))
						.convert(rutaFacturas + "factura-" + alimentaciones.get(0).getMascota().getNombre() + "-" 
				+ alimentaciones.get(0).getMascota().getCliente().getNombre() +"_" + alimentaciones.get(0).getMascota().getCliente().getApellido1() +".pdf");

				mail.sendArchivo(
						alimentaciones.get(0).getMascota().getCliente().getEmail(), "factura-" + alimentaciones.get(0).getMascota().getNombre() 
						+ "-" + alimentaciones.get(0).getMascota().getCliente().getNombre() +"_" + alimentaciones.get(0).getMascota().getCliente().getApellido1() 
						+".pdf", "Buenos días " + alimentaciones.get(0).getMascota().getCliente().getNombre() + ", /n Le envíamos la factura de las prestaciones disfrutadas por " 
						+ alimentaciones.get(0).getMascota().getNombre(), rutaFacturas + "factura-" + alimentaciones.get(0).getMascota().getNombre() + "-" 
						+ alimentaciones.get(0).getMascota().getCliente().getNombre() +"_" + alimentaciones.get(0).getMascota().getCliente().getApellido1() +".pdf");

			} catch (Exception e) {
				e.printStackTrace();
			}

		

		return prestaciones;
	}
}
