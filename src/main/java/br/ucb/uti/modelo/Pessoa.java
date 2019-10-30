package br.ucb.uti.modelo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Pessoa {
    private String nome;
    private String cpf;
    private Contato contato;
    private Endereco endereco;
}
