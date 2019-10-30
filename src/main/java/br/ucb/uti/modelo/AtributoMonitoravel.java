package br.ucb.uti.modelo;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AtributoMonitoravel {
    private double temperaturaAtual;
    private double temperaturaMinima;
    private double temperaturaMaxima;
    private Pressao pressaoAtual;
    private Pressao pressaoMinima;
    private Pressao pressaoMaxima;
}
