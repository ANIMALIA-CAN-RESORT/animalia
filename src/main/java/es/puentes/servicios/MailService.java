package es.puentes.servicios;

import javax.mail.MessagingException;

public interface MailService {

	 void send(String to, String subject, String body) throws MessagingException;

	 void sendArchivo(String to, String subject, String body, String... rutas) throws MessagingException;

}
