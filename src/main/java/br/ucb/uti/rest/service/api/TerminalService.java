package br.ucb.uti.rest.service.api;


import br.ucb.uti.modelo.Terminal;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

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
    Response cadastrar(Terminal terminal);

}
