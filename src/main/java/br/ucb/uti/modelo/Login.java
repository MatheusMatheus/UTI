package br.ucb.uti.modelo;

import lombok.*;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Entity
public class Login {

    @Id
    @JsonbTransient
    private String usuario;

    @Column(nullable = false)
    @JsonbTransient
    private String senha;
}
