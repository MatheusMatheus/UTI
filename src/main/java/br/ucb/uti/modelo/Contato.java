package br.ucb.uti.modelo;

import lombok.*;

import javax.json.Json;
import javax.json.JsonObjectBuilder;
import javax.persistence.Embeddable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Embeddable
public class Contato {
    private String telefoneResidencial;
    private String telefoneCelular;
    private String email;

    public JsonObjectBuilder toJson() {
        return Json.createObjectBuilder()
                .add("telefoneResidencial", this.telefoneResidencial)
                .add("telefoneCelular", this.telefoneCelular)
                .add("email", this.email);

    }
}
