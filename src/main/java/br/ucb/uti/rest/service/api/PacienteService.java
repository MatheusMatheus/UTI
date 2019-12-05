package br.ucb.uti.rest.service.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Path("paciente")
@Produces("application/json")
@Consumes("application/json")
public interface PacienteService {

    @GET
    @Path("todos")
    Response getPacientes();

    @GET
    @Path("{id}")
    Response getPaciente(@PathParam("id") Integer id);
}
