package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Endereco {
    private String logradouro;
    private String bairro;
    private String cep;
}
