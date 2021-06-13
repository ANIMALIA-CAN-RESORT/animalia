package es.puentes.descargarMascotas;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;

import es.puentes.entidades.MascotaConId;

@Component
public class SerializadorInforme {
	
	String hostFront;
	
	
	public String generarInforme(List<MascotaConId> mascotas) {

		List<MascotaDTO> mascotasDTO = mascotas.stream().filter(m -> !m.getPrestaciones().isEmpty()).map(m -> toDTO(m))
				.collect(Collectors.toList());
	
		ClassLoaderTemplateResolver resolver = new ClassLoaderTemplateResolver();
		resolver.setTemplateMode("HTML");
		resolver.setSuffix(".html");
		Locale locale = Locale.getDefault();
		TemplateEngine templateEngine = new TemplateEngine();
		templateEngine.setTemplateResolver(resolver);
		Context context = new Context(locale);
		context.setVariable("mascotas", mascotasDTO);
		String html = templateEngine.process("informeMascotas", context);

		return html;
	}

	private MascotaDTO toDTO(MascotaConId mascota) {
		return new MascotaDTO(mascota.getNombre(), mascota.getChip(), mascota.getRaza(), mascota.getTalla(),
				mascota.getCliente().getNombre() + mascota.getCliente().getApellidos(), hostFront + "/mascotas/" + mascota.getId());

	}
	
}
