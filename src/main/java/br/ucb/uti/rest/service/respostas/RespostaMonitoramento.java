package br.ucb.uti.rest.service.respostas;

import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.Terminal;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RespostaMonitoramento {
	private Terminal terminal;
	private Paciente paciente;
	
}
