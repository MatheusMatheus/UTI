package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Responsavel extends Pessoa{
    private Login login;

    @Builder
    public Responsavel(String nome, String cpf, Contato contato, Endereco endereco, Login login) {
        super(nome, cpf, contato, endereco);
        this.login = login;
    }
}
