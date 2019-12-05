package br.ucb.uti.modelo;

import javax.persistence.Entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "Responsavel")
public class Responsavel extends Pessoa{

    @Builder
    public Responsavel(String nome, String cpf, Contato contato, Endereco endereco) {
        super(nome, cpf, contato, endereco);
    }
}
