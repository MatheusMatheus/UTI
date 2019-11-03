package br.ucb.uti.rest.service.api;

import br.ucb.uti.modelo.Paciente;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;

@Path("paciente")
@Produces("application/json")
@Consumes("application/json")
public interface PacienteService {

    @GET
    Response getPacientes();

    @GET
    @Path("{id}")
    Response getPaciente(@PathParam("id") Integer id);

    @POST
    @Path("novo")
    Response cadastrar(Paciente paciente);

}
