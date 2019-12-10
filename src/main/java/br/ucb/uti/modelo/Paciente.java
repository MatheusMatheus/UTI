package br.ucb.uti.modelo;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Getter
@Setter
@Entity
@NamedQueries({
	@NamedQuery(
			name = "Paciente.findNaoMonitorados", 
			query = "SELECT p from Paciente p where p.monitoramento = null")
})
public class Paciente extends Pessoa {

	@NotNull
	@OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private EstadoPaciente estadoPaciente;
	
	@OneToOne
	@JsonbTransient
	private Monitoramento monitoramento;
}
