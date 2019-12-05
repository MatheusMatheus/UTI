package br.ucb.uti.modelo;

import javax.json.Json;
import javax.json.JsonObjectBuilder;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
@Embeddable
public class Endereco {

    private String logradouro;

    private String bairro;

    private String cep;

    public JsonObjectBuilder toJson() {
        return Json.createObjectBuilder()
                .add("logradouro", this.logradouro)
                .add("bairro", this.bairro)
                .add("cep", this.cep);

    }
}
