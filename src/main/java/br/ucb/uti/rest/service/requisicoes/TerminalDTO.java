package br.ucb.uti.rest.service.requisicoes;

import java.time.LocalDate;

import javax.json.bind.annotation.JsonbDateFormat;

import br.ucb.uti.modelo.StatusTerminal;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TerminalDTO {
	private Integer identificador;
	
    private String nome;

    private String mac;

    @JsonbDateFormat(value = "dd/MM/yyyy")
    private LocalDate dataCadastro;

    private StatusTerminal statusTerminal;
  	
}
