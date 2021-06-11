package es.puentes.facturas;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import es.puentes.entidades.AlimentacionConId;
import es.puentes.entidades.AlojamientoConId;

@Component
public class SerializadorFactura {

	@Value("${prestaciones.url-front}") // tengo que meterlo en el properties
	String hostFront;

	public String generarFactura(List<AlimentacionConId> alimentaciones, List<AlojamientoConId> alojamientos) {

		List<PrestacionDTO> alimentacionesDTO = alimentaciones.stream().map(p -> toAlimentacionDTO(p))
				.collect(Collectors.toList());

		List<PrestacionDTO> alojamientosDTO = alojamientos.stream().map(p -> toAlojamientoDTO(p))
				.collect(Collectors.toList());
		
		List<PrestacionDTO> prestaciones = Stream.concat(alimentacionesDTO.stream(), alojamientosDTO.stream()).collect(Collectors.toList());

		ClassLoaderTemplateResolver resolver = new ClassLoaderTemplateResolver();
		resolver.setTemplateMode("HTML5");
		resolver.setSuffix(".html");
		Locale locale = Locale.getDefault();
		TemplateEngine templateEngine = new TemplateEngine();
		templateEngine.setTemplateResolver(resolver);
		Context context = new Context(locale);
		context.setVariable("prestaciones", prestaciones);
		String html = templateEngine.process("factura", context);

		return html;
	}

	private PrestacionDTO toAlimentacionDTO(AlimentacionConId alimentacion) {

		AlimentacionDTO alimentacionDTO = new AlimentacionDTO(alimentacion.getFechaEntrada(),
				alimentacion.getFechaSalida(), alimentacion.getTipoComida(), alimentacion.getCantidadComidaDiaria(),
				alimentacion.getMascota(), hostFront + "/prestaciones/" + alimentacion.getId());
		alimentacionDTO.tipo = "Alimentacion";
		return alimentacionDTO;
	}
	
	private PrestacionDTO toAlojamientoDTO(AlojamientoConId alojamiento) {
		AlojamientoDTO alojamientoDTO = new AlojamientoDTO(alojamiento.getFechaEntrada(),alojamiento.getFechaSalida(),
				alojamiento.getJaula(), alojamiento.getMascota(), hostFront + "/prestaciones/" + alojamiento.getId());
		alojamientoDTO.tipo = "Alojamiento";
		
		return alojamientoDTO;
		
	}

}
