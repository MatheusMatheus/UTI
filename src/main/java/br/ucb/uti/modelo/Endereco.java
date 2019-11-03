package br.ucb.uti.modelo;

import lombok.*;

import javax.json.Json;
import javax.json.JsonObjectBuilder;
import javax.persistence.Column;
import javax.persistence.Embeddable;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Embeddable
public class Endereco {

    private String logradouro;

    private String bairro;

    @Column(unique = true)
    private String cep;

    public JsonObjectBuilder toJson() {
        return Json.createObjectBuilder()
                .add("logradouro", this.logradouro)
                .add("bairro", this.bairro)
                .add("cep", this.cep);

    }
}
