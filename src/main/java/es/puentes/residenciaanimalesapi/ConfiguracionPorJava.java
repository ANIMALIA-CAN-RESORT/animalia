package es.puentes.residenciaanimalesapi;

import java.util.Collections;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.Ordered;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.fasterxml.jackson.databind.ObjectMapper;

import es.puentes.entidades.ClienteConId;
import es.puentes.entidades.MascotaConId;
import es.puentes.rest.MixIns;

@Configuration
@PropertySource({ "classpath:config/rest.properties", "classpath:config/jackson.properties" })
@ComponentScan({"es.puentes"})
public class ConfiguracionPorJava {

	@Bean
	public ObjectMapper getObjectMapper() {

		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(MascotaConId.class, MixIns.Mascotas.class);
		mapper.addMixIn(ClienteConId.class, MixIns.Clientes.class);
//		mapper.addMixIn(PrestacionConId.class, MixIns.Prestaciones.class);


		return mapper;
	}

}