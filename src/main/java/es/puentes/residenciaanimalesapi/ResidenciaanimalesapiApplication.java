package es.puentes.residenciaanimalesapi;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;


@SpringBootApplication
@ImportResource({"classpath:config/jpa-config.xml"})
@Import(ConfiguracionPorJava.class)
public class ResidenciaanimalesapiApplication {

	private static final Logger log = LoggerFactory.getLogger(ResidenciaanimalesapiApplication.class);
	
	public static void main(String[] args) {
		ConfigurableApplicationContext context =
				SpringApplication.run(ResidenciaanimalesapiApplication.class, args);
	}
}
