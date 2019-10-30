package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Contato {
    private String telefoneResidencial;
    private String telefoneCelular;
    private String email;
}
