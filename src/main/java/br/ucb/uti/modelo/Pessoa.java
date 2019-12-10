package br.ucb.uti.modelo;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
