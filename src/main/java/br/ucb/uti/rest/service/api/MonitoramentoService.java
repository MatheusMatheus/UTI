package br.ucb.uti.rest.service.api;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.PacienteMonitorado;

@Path("monitoramento")
@Produces("application/json")
@Consumes("application/json")
public interface MonitoramentoService {
	
    @PUT
    @Path("paciente")
    Response monitora(Monitoramento monitoramento);
    
    @POST
    @Path("associa-paciente")
    Response associaPaciente(PacienteMonitorado monitoramento);

}
