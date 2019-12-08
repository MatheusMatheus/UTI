package br.ucb.uti.rest.service.requisicoes;

import java.time.LocalDateTime;

import javax.json.bind.annotation.JsonbDateFormat;

import br.ucb.uti.modelo.Pressao;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MonitoramentoDTO {
	private PacienteDTO paciente;
	
	private TerminalDTO terminal;

    private Pressao pressaoConsultada;

    private double temperaturaConsultada;
    
    @JsonbDateFormat(value = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime momentoConsulta;
}
