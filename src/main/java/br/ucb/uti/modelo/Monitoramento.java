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


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
@NamedQueries({
	@NamedQuery(
			name = "Monitoramento.findPacienteId", 
			query = "SELECT m.pacienteMonitorado from Monitoramento m where m.pacienteMonitorado.paciente.cpf = :pacienteID")
})
public class Monitoramento {

    @Id
    @GeneratedValue
    private int id;

    @JsonbDateFormat(value = "dd/MM/yyyy HH:mm:ss")
    private LocalDateTime momentoConsulta;

    @OneToOne
    private PacienteMonitorado pacienteMonitorado;

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
