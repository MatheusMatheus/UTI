package br.ucb.uti.rest.service.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.ucb.uti.rest.service.requisicoes.MonitoramentoDTO;

@Path("monitoramento")
@Produces("application/json")
@Consumes("application/json")
public interface MonitoramentoService {
	
    @GET
    @Path("paciente/{id}")
    Response monitora(@PathParam("id") String id);
    
    @POST
    @Path("associa-paciente")
    Response associaPaciente(MonitoramentoDTO monitoramentoDTO);
    
}
