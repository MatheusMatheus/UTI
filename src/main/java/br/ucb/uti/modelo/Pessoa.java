package br.ucb.uti.modelo;

import lombok.*;

import javax.json.bind.annotation.JsonbProperty;
import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Pessoa {

    @Id
    @Column(name = "cpf", updatable = false, nullable = false, length = 11)
    @Size(min = 11, max = 11)
    private String cpf;

    @Column(nullable = false)
    private String nome;

    @Embedded
    private Contato contato;

    @Embedded
    private Endereco endereco;
}
