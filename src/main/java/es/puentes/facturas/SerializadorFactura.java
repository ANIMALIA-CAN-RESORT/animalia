package es.puentes.facturas;


import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import es.puentes.entidades.PrestacionConId;


@Component
public class SerializadorFactura {
	
	@Value("${facturas.url-front}")//tengo que meterlo en el properties
	String hostFront;
	
	public String generarFactura(List<PrestacionConId> prestaciones) {

		List<PrestacionDTO> prestacionesDTO = prestaciones.stream().map(p -> toDTO(p))
				.collect(Collectors.toList());

		ClassLoaderTemplateResolver resolver = new ClassLoaderTemplateResolver();
		resolver.setTemplateMode("HTML5");
		resolver.setSuffix(".html");
		Locale locale = Locale.getDefault();
		TemplateEngine templateEngine = new TemplateEngine();
		templateEngine.setTemplateResolver(resolver);
		Context context = new Context(locale);
		context.setVariable("prestaciones", prestacionesDTO);
		String html = templateEngine.process("factura", context);

		return html;
	}

	private PrestacionDTO toDTO(PrestacionConId prestacion) {
		
		PrestacionDTO prestacionDTO = new PrestacionDTO(prestacion.getFechaEntrada(), prestacion.getFechaSalida(), prestacion.getMascota(),
				hostFront + "/prestaciones/" + prestacion.getId());
		if (prestacion.getClass().getSimpleName().equals("AlimentacionConId")) {
			prestacionDTO.tipo = "Alimentacion";
			prestacionDTO.jaula = "";
			
		} else {
			prestacionDTO.tipo = "Alojamiento";
			prestacionDTO.tipoComida = "";
			prestacionDTO.cantidadComidaDiaria = 0;
		}
		return prestacionDTO;
 	}
	


}
