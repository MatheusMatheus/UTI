package br.ucb.uti.modelo;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class EstadoPaciente {

    @Id
    @GeneratedValue
    private Integer identificador;

    @Column(nullable = false)
    private double temperaturaAtual;

    @Column(nullable = false)
    private double temperaturaMinima;

    @Column(nullable = false)
        private double temperaturaMaxima;

    @Embedded
    @Column(nullable = false)
    @AttributeOverrides(
            {
                    @AttributeOverride(name = "diastolica", column = @Column(name = "diastolicaMinima")),
                    @AttributeOverride(name = "sistolica", column = @Column(name = "sistolicaMinima"))
            }
    )
    private Pressao pressaoMinima;

    @Embedded
    @Column(nullable = false)
    @AttributeOverrides(
            {
                    @AttributeOverride(name = "diastolica", column = @Column(name = "diastolicaMaxima")),
                    @AttributeOverride(name = "sistolica", column = @Column(name = "sistolicaMaxima"))
            }
    )
    private Pressao pressaoMaxima;

}
