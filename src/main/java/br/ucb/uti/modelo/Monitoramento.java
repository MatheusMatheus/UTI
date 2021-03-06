package br.ucb.uti.modelo;

import java.time.LocalDateTime;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

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
			query = "SELECT m from Monitoramento m "
					+ "where m.terminal.statusTerminal = :status")
})
public class Monitoramento {

	@Id
	@GeneratedValue
	private int id;

	@ManyToOne
    private Terminal terminal;
    
	@ManyToOne
    private Paciente paciente;
	
	@Column(unique = true)
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
    	
		this.terminal = terminal;
		this.paciente = paciente;
		this.momentoConsulta = momentoConsulta;
		this.pressaoConsultada = pressaoConsultada;
		this.temperaturaConsultada = temperaturaConsultada;

		// Mantém a integridade referencial
		terminal.getMonitoramentos().add(this);
		paciente.getMonitoramentos().add(this);
    }
}
