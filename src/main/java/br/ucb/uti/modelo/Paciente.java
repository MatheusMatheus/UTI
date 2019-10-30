package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Paciente extends Pessoa{
    private AtributoMonitoravel atributoMonitoravel;

    @Builder
    public Paciente(String nome, String cpf, Contato contato, Endereco endereco, AtributoMonitoravel atributoMonitoravel) {
        super(nome, cpf, contato, endereco);
        this.atributoMonitoravel = atributoMonitoravel;
    }

}
