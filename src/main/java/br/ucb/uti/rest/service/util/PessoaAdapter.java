package br.ucb.uti.rest.service.util;

import br.ucb.uti.modelo.Pessoa;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.bind.adapter.JsonbAdapter;

public class PessoaAdapter implements JsonbAdapter<Pessoa, JsonObject> {

    @Override
    public JsonObject adaptToJson (Pessoa pessoa) throws Exception {
        return Json.createObjectBuilder()
                .add("cpf", pessoa.getCpf())
                .add("nome", pessoa.getNome())
                .addAll(pessoa.getContato().toJson())
                .addAll(pessoa.getEndereco().toJson())
                .build();
    }

    @Override
    public Pessoa adaptFromJson(JsonObject jsonObject) throws Exception {

        return null;
    }

}
