package br.ucb.uti.rest.service;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.rest.service.api.PacienteService;

@Stateless
public class PacienteServiceImpl implements PacienteService {

    @Inject
    private PacienteDAO pacienteDAO;
    
    @Override
    public Response getPacientes() {
        try {
            return Response.ok().entity(pacienteDAO.buscaTodos()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
	@Override
	public Response getPacientesNaoMonitorados() {
        try {
            return Response.ok().entity(pacienteDAO.findNaoMonitorados()).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}

    @Override
    public Response getPaciente(Integer id) {
        try {
            return Response.ok().entity(pacienteDAO.buscaPorId(id)).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

	@Override
	public Response cadastrar(Paciente paciente) {
        try {
        	pacienteDAO.insere(paciente);
            return Response.ok().entity(paciente).status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}
}
