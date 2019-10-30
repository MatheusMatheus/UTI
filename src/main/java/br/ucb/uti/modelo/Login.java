package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Login {
    private String usuario;
    private String senha;
}
