package es.puentes.servicios;


public interface MailService {

	 void send(String to, String subject, String body);

	 void sendArchivo(String to, String subject, String body, String... rutas);

}
