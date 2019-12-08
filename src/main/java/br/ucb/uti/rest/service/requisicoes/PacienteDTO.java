package br.ucb.uti.rest.service.requisicoes;

import br.ucb.uti.modelo.Contato;
import br.ucb.uti.modelo.Endereco;
import br.ucb.uti.modelo.EstadoPaciente;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PacienteDTO {
    private String cpf;

    private String nome;

    private Contato contato;

    private Endereco endereco;
    
    private EstadoPaciente estadoPaciente;
}
