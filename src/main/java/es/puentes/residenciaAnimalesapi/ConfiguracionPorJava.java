package es.puentes.residenciaAnimalesapi;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.jackson.Jackson2ObjectMapperBuilderCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import es.lanyu.commons.servicios.entidad.ServicioEntidad;
import es.lanyu.commons.servicios.entidad.ServicioEntidadImpl;
import es.puentes.repositorios.AlojamientoConId;
import es.puentes.repositorios.AlojamientoDAO;
import es.puentes.repositorios.MascotaConId;
import es.puentes.repositorios.MascotaDAO;
import residenciaAnimales.Alimentacion;
import residenciaAnimales.Alojamiento;
import residenciaAnimales.Cliente;
import residenciaAnimales.Mascota;
import residenciaAnimales.Prestacion;

@Configuration
@PropertySource({ "classpath:config/rest.properties", "classpath:config/jackson.properties" })
@ComponentScan("es.puentes") // Para registrar JsonSerializers
public class ConfiguracionPorJava {
	
	@Value("${alojamiento.precio-dia}")
	float precioAlojamientoDia;
	
	@Value("${alimentacion.precio-normal-cincuenta}")
	float precioAlimentacionNormalCincuenta;
	
	@Value("${alimentacion.precio-premium-cincuenta}")
	float precioAlimentacionPremiumCincuenta;
	
	@Bean
	public ServicioEntidad getServicioEntidad(MascotaDAO mascotaDAO){
		ServicioEntidad servicioEntidad = new ServicioEntidadImpl();
		mascotaDAO.findAll()
			.forEach(p -> servicioEntidad.getGestorNombrables().addNombrable(Mascota.class, p));
		
		return servicioEntidad;
	}
	
	@Bean
	// Tambien se le aplican las propiedades de jackson aunque se use new ObjectMapper()
	// porque es un bean y se configura (esto seria como su constructor)
	public ObjectMapper getObjectMapper() {

		ObjectMapper mapper = new ObjectMapper();
		// Los MixIn se pueden usar y reutilizar sobre codigo que no controlo
		mapper.addMixIn(Mascota.class, MixIns.Mascotas.class);
		mapper.addMixIn(Cliente.class, MixIns.Clientes.class);
		// Incluido sobre las interfaces
		mapper.addMixIn(Prestacion.class, MixIns.Prestaciones.class);
		mapper.addMixIn(Alojamiento.class, MixIns.Alojamientos.class);
		mapper.addMixIn(Alimentacion.class, MixIns.Alimentaciones.class);

		
		// Aqui no se conserva toda la configuracion (se contruye)
		// Esta si porque no se sobrescribe
//		mapper.setVisibility(PropertyAccessor.FIELD, Visibility.ANY);
//		mapper.setVisibility(PropertyAccessor.GETTER, Visibility.PROTECTED_AND_PUBLIC);
		
		// Esta no se conserva porque la coge de properties
//		mapper.setSerializationInclusion(Include.ALWAYS);
		
		return mapper;
	}
	
//    @Bean
//	Otra forma de personalizar (esto seria como su metodo de configuracion)
    public Jackson2ObjectMapperBuilderCustomizer addCustomSerialization() {
        return new Jackson2ObjectMapperBuilderCustomizer() {

            @Override
            public void customize(Jackson2ObjectMapperBuilder jacksonObjectMapperBuilder) {
                jacksonObjectMapperBuilder.featuresToDisable(
                        // Tanto para deserializacion como serializacion
                        DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,
                        SerializationFeature.FAIL_ON_EMPTY_BEANS
                    );
                // Add your customization
                // jacksonObjectMapperBuilder.featuresToEnable(...)
                // jacksonObjectMapperBuilder.featuresToEnable(SerializationFeature.);
                // jacksonObjectMapperBuilder.autoDetectGettersSetters(false);
                // jacksonObjectMapperBuilder.autoDetectFields(true);

                jacksonObjectMapperBuilder.mixIn(Mascota.class, MixIns.Mascotas.class);
                jacksonObjectMapperBuilder.mixIn(Cliente.class, MixIns.Clientes.class);
                jacksonObjectMapperBuilder.mixIn(Prestacion.class, MixIns.Prestaciones.class);
        		jacksonObjectMapperBuilder.mixIn(Alojamiento.class, MixIns.Alojamientos.class);
        		jacksonObjectMapperBuilder.mixIn(Alimentacion.class, MixIns.Alimentaciones.class);
       
                // Aqui se aplica toda la configuracion (es un metodo)
                jacksonObjectMapperBuilder.visibility(PropertyAccessor.FIELD, Visibility.ANY);
                jacksonObjectMapperBuilder.visibility(PropertyAccessor.GETTER, Visibility.PROTECTED_AND_PUBLIC);
                jacksonObjectMapperBuilder.serializationInclusion(Include.ALWAYS);
            }
        };
    }

}