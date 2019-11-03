package br.ucb.uti.modelo;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "Responsavel")
public class Responsavel extends Pessoa{

    @OneToOne
    private Login login;

    @Builder
    public Responsavel(String nome, String cpf, Contato contato, Endereco endereco, Login login) {
        super(nome, cpf, contato, endereco);
        this.login = login;
    }
}
