package br.ucb.uti.modelo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class PacienteMonitorado {
	
	@Id
	@GeneratedValue
	private int id;
	
	@OneToOne
    private Paciente paciente;

	@OneToOne
    private Terminal terminal;
}
