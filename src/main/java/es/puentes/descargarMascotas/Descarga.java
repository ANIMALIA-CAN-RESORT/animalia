package es.puentes.descargarMascotas;

import java.io.PrintWriter;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import es.puentes.entidades.MascotaConId;
import es.puentes.repositorios.MascotaDAO;
import io.woo.htmltopdf.HtmlToPdf;
import io.woo.htmltopdf.HtmlToPdfObject;

@Configuration
@EnableScheduling
public class Descarga {

	private static MascotaDAO repo;
	@Autowired
	static SerializadorInforme serializador;

	@Value("${ruta.facturas}")
	String rutaFacturas;

	@Autowired
	public void init(MascotaDAO repo, SerializadorInforme serializador) {
		Descarga.repo = repo;
		Descarga.serializador = serializador;
	}

//	@Scheduled(cron = "0 33 13 * * MON-SAT")
	public List<MascotaConId> generarInformes() {

		List<MascotaConId> mascotas = repo.findAll().stream().collect(Collectors.toList());


			try {

				String html = serializador.generarInforme(mascotas);
				PrintWriter printerHtml = new PrintWriter("mascotas.html");
				printerHtml.write(html);
				printerHtml.close();

				HtmlToPdf.create().object(HtmlToPdfObject.forHtml(html))
						.convert("mascotas.pdf");
				

			} catch (Exception e) {
				e.printStackTrace();
			}

		return mascotas;
	}

}
