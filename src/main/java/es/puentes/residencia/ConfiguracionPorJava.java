package es.puentes.residencia;

import java.util.AbstractMap;
import java.util.Arrays;
import java.util.Properties;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.fasterxml.jackson.databind.ObjectMapper;

import es.puentes.entidades.ClienteConId;
import es.puentes.entidades.MascotaConId;
import es.puentes.rest.MixIns;
import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;

@Configuration
@PropertySource({ "classpath:config/rest.properties", "classpath:config/jackson.properties", 
	"classpath:config/precios.properties", "classpath:config/gestionBBDD.properties", "classpath:config/mail.properties"
//	, "classpath:config/passwords.properties" 
})
@EnableTransactionManagement
@EnableJpaRepositories({"${misRepositorios}", "es.puentes.security.usuarios"}) // leer valor de propiedades? pero solo para las entidades anotadas
@ComponentScan({"es.puentes.rest", "es.puentes.security"}) // para que escanee los Controller y los servicios...
public class ConfiguracionPorJava {

	@Value("${misEntidades}")
	String entidades;
	@Value("${entidadSecurity}")
	String entidadSecurity;

	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, Environment env,
			JpaVendorAdapter vendorAdapter) {

		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(dataSource);
//	    JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter(); // O pedirlo como parametro y que haga el Autowired
		em.setJpaVendorAdapter(vendorAdapter);

		em.setPackagesToScan(entidades, entidadSecurity); // leer valor de propiedades? pero solo para las entidades anotadas
		// em.setMappingResources("jpa/Usuario.orm.xml", "jpa/Cuaderno.orm.xml"); //para escanear archivos xml...
		// leerValorDePropiedades?

		Properties jpaProperties = new Properties();
		Arrays.asList("dialect", "show_sql", "hbm2ddl.auto", "enable_lazy_load_no_trans") //  leer valor de	para las entidades anotadas 
				.stream().map(s -> "hibernate." + s)
				.map(p -> new AbstractMap.SimpleEntry<String, String>(p, env.getProperty(p)))
				.filter(e -> e.getValue() != null).forEach(e -> jpaProperties.put(e.getKey(), e.getValue()));
		em.setJpaProperties(jpaProperties);

		return em;
	}

	@Bean
	public EntityManager entityManager(EntityManagerFactory emf) {
		System.err.println("--- LAS ENTIDADES MAPEADAS SON ---");
		emf.getMetamodel().getEntities().forEach(System.err::println);
		System.err.println("----------------------------------");

		return emf.createEntityManager();
	}
	
	@Value("${alojamiento.precio-dia}")
	private float precioDia;
	
	@Value("${alimentacion.precio-normal-cincuenta}")
	private float precioNormalCincuenta;
	
	@Value("${alimentacion.precio-premium-cincuenta}")
	private float precioPremiumCincuenta;
	
	@Bean("precioAlojamiento")
	public float getPrecioDia() {

		return precioDia;
	}
	
	@Bean("precioAlimentacionNormal")
	public float getPrecioNormalCincuenta() {

		return precioNormalCincuenta;
	}
	
	@Bean("precioAlimentacionPremium")
	public float getPrecioPremiumCincuenta() {

		return precioPremiumCincuenta;
	}
	
	@Bean
	public ObjectMapper getObjectMapper() {

		ObjectMapper mapper = new ObjectMapper();
		mapper.addMixIn(MascotaConId.class, MixIns.Mascotas.class);
		mapper.addMixIn(ClienteConId.class, MixIns.Clientes.class);
//		mapper.addMixIn(PrestacionConId.class, MixIns.Prestaciones.class);


		return mapper;
	}

	@Bean
	public JavaMailSender getJavaMailSender(@Value("${spring.mail.password}") String password,
			@Value("${spring.mail.username}") String direccion, @Value("${spring.mail.host}") String host,
			@Value("${spring.mail.port}") int port) {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost(host);
		mailSender.setPort(port);
		mailSender.setUsername(direccion);
		mailSender.setPassword(password);

		Properties props = mailSender.getJavaMailProperties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");

		return mailSender;
	}

}