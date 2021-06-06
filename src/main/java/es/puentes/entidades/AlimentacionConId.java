package es.puentes.entidades;

import java.time.temporal.ChronoUnit;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;

import es.puentes.repositorios.AlimentacionListener;
import es.puentes.residencia.Alimentacion;

@Entity
@EntityListeners(AlimentacionListener.class)
@DiscriminatorValue("AM")
public class AlimentacionConId extends PrestacionConId implements Alimentacion {

	@Column(name="TIPO_COMIDA")
	private String tipoComida;//será "NORMAL" o "PREMIUM
	@Column(name="CANTIDAD_COMIDA_DIA")
	private float cantidadComidaDiaria;//será multiplo de 50 gramos, en función de la talla de la mascota
	private final static float PRECIO_NORMAL_CINCUENTA = 2.5f;
	private final static float PRECIO_PREMIUM_CINCUENTA = 3.5f;
	
	public AlimentacionConId() {
		super();
	}

	public String getTipoComida() {
		return tipoComida;
	}
	
	public void setTipoComida(String tipoComida) {
		this.tipoComida = tipoComida;
	}
	
	@Override
	public float getCantidadComidaDiaria() {
		return cantidadComidaDiaria;
	}
	
	public void setCantidadComidaDiaria(float cantidadComidaDiaria) {
		this.cantidadComidaDiaria = cantidadComidaDiaria;
	}
	
	public static float getPrecioNormalCincuenta() {
		return PRECIO_NORMAL_CINCUENTA;
	}
	
	public static float getPrecioPremiumCincuenta() {
		return PRECIO_PREMIUM_CINCUENTA;
	}

	@Override
	public float getCantidadComidaTotal() {
		return getFechaEntrada().until(getFechaSalida(), ChronoUnit.DAYS) * getCantidadComidaDiaria();
	}

	@Override
	public float getPrecioDia() {
		float resultado = 0; 
		if (getTipoComida().equals("NORMAL")) {
			resultado = getCantidadComidaDiaria()/50 * getPrecioNormalCincuenta(); //si la cantidad fueran 100 quiero que el precio sea 2 x PRECIOCINCUENTA
		}
		else if (getTipoComida().equals("PREMIUM")) {
			resultado = getCantidadComidaDiaria()/50 * getPrecioPremiumCincuenta(); //si la cantidad fueran 100 quiero que el precio sea 2 x PRECIOCINCUENTA
		}
		return resultado;	}
	}
