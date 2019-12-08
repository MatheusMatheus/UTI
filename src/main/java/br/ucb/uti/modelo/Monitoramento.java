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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@NamedQueries({
	@NamedQuery(
			name = "Monitoramento.findPacienteId", 
			query = "SELECT m from Monitoramento m where m.terminal.paciente.cpf = :pacienteID")
})
public class Monitoramento {
	
	@Id
	@GeneratedValue
	private Integer id;

    @OneToOne
    private Terminal terminal;
    
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

}
