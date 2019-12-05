package br.ucb.uti.rest.service.requisicoes;

import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.Terminal;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequisicaoCadastroTerminal {
	private Terminal terminal;
	private Paciente paciente;
}
