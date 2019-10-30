package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class Terminal {
    private String nome;
    private int identificador;
    private String mac;
    private LocalDate dataCadastro;
    private StatusTerminal statusTerminal;
}
