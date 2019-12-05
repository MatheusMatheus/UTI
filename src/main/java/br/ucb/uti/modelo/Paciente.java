package br.ucb.uti.modelo;

import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Getter
@Setter
@Entity(name = "Paciente")
public class Paciente extends Pessoa {

	@NotNull
	@OneToOne(
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private EstadoPaciente estadoPaciente;

    @Builder
    public Paciente(String nome, String cpf, Contato contato, Endereco endereco, EstadoPaciente estadoPaciente) {
        super(nome, cpf, contato, endereco);
        this.estadoPaciente = estadoPaciente;
    }
}
