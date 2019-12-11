package br.ucb.uti.modelo;

import java.util.List;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
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
public class Paciente extends Pessoa {

	@NotNull
	@OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private EstadoPaciente estadoPaciente;
	
	@OneToMany
	@JsonbTransient
	private List<Monitoramento> monitoramentos;
}
