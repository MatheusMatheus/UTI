package br.ucb.uti.modelo;

import lombok.*;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Terminal {

    @Id
    @GeneratedValue
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
}
