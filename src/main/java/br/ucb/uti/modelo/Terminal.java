package br.ucb.uti.modelo;

import java.time.LocalDate;
import java.util.List;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
    
    @OneToMany
    @JsonbTransient
    private List<Monitoramento> monitoramentos;
}
