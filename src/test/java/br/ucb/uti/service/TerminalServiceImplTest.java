package br.ucb.uti.service;

import br.ucb.uti.modelo.StatusTerminal;
import br.ucb.uti.modelo.Terminal;
import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import java.time.LocalDate;

public class TerminalServiceImplTest {

    private Jsonb jsonb;

    @Before
    public void init() {
        this.jsonb = JsonbBuilder.
                newBuilder().
                build();
    }

    @Test
    public void serialize() {
        Terminal terminal = Terminal.builder()
                .identificador(0123)
                .nome("Terminal 6516")
                .mac("02-2D-38-52-8F-DA")
                .dataCadastro(LocalDate.now())
                .statusTerminal(StatusTerminal.ATIVO).build();


        String serialized = this.jsonb.toJson(terminal);
        System.out.println("serialized = " + serialized);
        Assert.assertThat(serialized, CoreMatchers.containsString("dataCadastro"));
    }
}
