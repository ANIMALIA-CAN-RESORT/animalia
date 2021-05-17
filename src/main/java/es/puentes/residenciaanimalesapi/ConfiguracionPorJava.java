package es.puentes.residenciaanimalesapi;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource({ "classpath:config/rest.properties" })
@ComponentScan("es.puentes")
public class ConfiguracionPorJava {


    
}
