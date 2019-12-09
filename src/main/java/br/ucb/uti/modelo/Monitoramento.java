package br.ucb.uti.modelo;

import java.time.LocalDateTime;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@NamedQueries({
	@NamedQuery(
			name = "Monitoramento.findByTerminalId", 
			query = "SELECT m from Monitoramento m where m.terminal.identificador = :terminalID  "
					+ "and m.terminal.statusTerminal = :status")
})
public class Monitoramento {
	
	@EmbeddedId
	private MonitoramentoId id;

    @OneToOne
    @JoinColumn(name = "fk_terminal", insertable = false, updatable = false)
    private Terminal terminal;
    
    @OneToOne
    @JoinColumn(name = "fk_paciente", insertable = false, updatable = false)
    private Paciente paciente;
    
    @JsonbDateFormat(value = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime momentoConsulta;

    @Embedded
    @AttributeOverrides(
            {
                    @AttributeOverride(name = "diastolica", column = @Column(name = "diastolicaConsultada")),
                    @AttributeOverride(name = "sistolica", column = @Column(name = "sistolicaConsultada"))
            }
    )
    private Pressao pressaoConsultada;

    private double temperaturaConsultada;
    
    @Builder
	public Monitoramento(Terminal terminal, Paciente paciente, LocalDateTime momentoConsulta, Pressao pressaoConsultada,
			double temperaturaConsultada) {
    	// Cria a chave primária
    	this.id = new MonitoramentoId(paciente.getCpf(), terminal.getIdentificador());

		this.terminal = terminal;
		this.paciente = paciente;
		this.momentoConsulta = momentoConsulta;
		this.pressaoConsultada = pressaoConsultada;
		this.temperaturaConsultada = temperaturaConsultada;

		// Mantém a integridade referencial
		this.terminal.setMonitoramento(this);
		this.paciente.setMonitoramento(this);
    }
}
