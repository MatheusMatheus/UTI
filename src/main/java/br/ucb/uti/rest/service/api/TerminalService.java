package br.ucb.uti.rest.service.api;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.ucb.uti.rest.service.requisicoes.TerminalDTO;

@Path("terminal")
@Produces("application/json")
@Consumes("application/json")
public interface TerminalService{


    @GET
    @Path("todos")
    Response getTerminais();

    @GET
    @Path("{id}")
    Response getTerminal(@PathParam("id") Integer id);

    @POST
    @Path("cadastrar")
    Response cadastrar(TerminalDTO terminalDTO);

}
