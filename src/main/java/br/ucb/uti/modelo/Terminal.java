package br.ucb.uti.modelo;

import java.time.LocalDate;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
			name = "Terminal.findLivres", 
			query = "SELECT t from Terminal t where t.monitoramento = null "
					+ "and t.statusTerminal = :status"),
	@NamedQuery(
			name = "Terminal.findVinculos", 
			query = "SELECT t from Terminal t where t.monitoramento = null "
					+ "and t.statusTerminal = :status")
})
public class Terminal {

    @Id
    @GeneratedValue
    @Column(updatable = false, nullable = false)
    private Integer identificador;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false, unique = true)
    private String mac;

    @Column(nullable = false)
    @JsonbDateFormat(value = "dd/MM/yyyy")
    private LocalDate dataCadastro;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private StatusTerminal statusTerminal;
    
    @OneToOne
    @JsonbTransient
    private Monitoramento monitoramento;
}
