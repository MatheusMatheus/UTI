package br.ucb.uti.modelo;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Embeddable
public class Pressao {

    @Column(nullable = false)
    private double sistolica;

    @Column(nullable = false)
    private double diastolica;
}
