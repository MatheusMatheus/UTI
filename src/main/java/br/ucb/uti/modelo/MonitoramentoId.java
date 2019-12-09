package br.ucb.uti.modelo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@Embeddable
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
public class MonitoramentoId implements Serializable {
	private static final long serialVersionUID = 1L;

	@Column(name = "fk_paciente")
	private String pacienteId;
	
	@Column(name = "fk_terminal")
	private Integer terminalId;
}
