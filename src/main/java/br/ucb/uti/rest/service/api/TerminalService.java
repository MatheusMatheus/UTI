package br.ucb.uti.rest.service.api;


import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.ucb.uti.rest.service.requisicoes.TerminalDTO;

@Path("terminal")
@Produces("application/json")
@Consumes("application/json")
public interface TerminalService{
	
    @POST
    @Path("cadastrar")
    Response cadastrar(TerminalDTO terminalDTO);
    
    @PUT
    @Path("editar")
    Response editar(TerminalDTO terminalDTO);

    @GET
    @Path("todos")
    Response getTerminais();
    
    @GET
    @Path("desvinculados")
    Response getTerminaisDesvinculados();
    
    @GET
    @Path("vinculados")
    Response getTerminaisVinculados();
    
    @GET
    @Path("livres")
    Response getTerminaisLivresParaMonitorar();
    
    @GET
    @Path("status/{status}")
    Response getByStatus(@PathParam("status") String status);

    @GET
    @Path("{id}")
    Response getTerminal(@PathParam("id") Integer id);

    @PUT
    @Path("desvincula/{id}")
    Response desvincula(@PathParam("id") Integer id);

}
