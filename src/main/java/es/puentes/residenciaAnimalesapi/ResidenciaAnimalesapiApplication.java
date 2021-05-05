package es.puentes.residenciaAnimalesapi;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;

import com.fasterxml.jackson.core.JsonParser.Feature;
import com.fasterxml.jackson.databind.ObjectMapper;

import es.puentes.repositorios.ClienteConId;
import es.puentes.repositorios.ClienteDAO;

@SpringBootApplication
@ImportResource({"classpath:config/jpa-config.xml"})
@Import(ConfiguracionPorJava.class)
public class ResidenciaAnimalesapiApplication {

	private static final Logger log = LoggerFactory.getLogger(ResidenciaAnimalesapiApplication.class);
	
	public static void main(String[] args) {
		ConfigurableApplicationContext context =
				SpringApplication.run(ResidenciaAnimalesapiApplication.class, args);
		
		ClienteDAO clienteDAO = context.getBean(ClienteDAO.class);
		clienteDAO.findAll().stream().map(ClienteConId::toString).forEach(log::trace);
	}

	static void cargarClienteDesdeArchivo(String ruta, ObjectMapper mapper, ClienteDAO clienteDAO) {
		String linea = null;
		mapper.configure(Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
		try (BufferedReader buffer = new BufferedReader(
				new InputStreamReader(new FileInputStream(ruta), "UTF-8"))) {
			ClienteConId cliente;
			while((linea = buffer.readLine()) != null) {
				if (linea.startsWith("{") && linea.endsWith("}")) {
					cliente = mapper.readValue(linea, ClienteConId.class);
					clienteDAO.save(cliente);
//					log.trace("Cargado {}", cliente);
				}
			}
		} catch (Exception e) {
			log.error("Error leyendo: {}", linea);
		}
	}
}
