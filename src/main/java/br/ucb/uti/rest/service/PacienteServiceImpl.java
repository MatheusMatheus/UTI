package br.ucb.uti.rest.service;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.PacienteMonitorado;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.modelo.dao.PacienteMonitoradoDAO;
import br.ucb.uti.rest.service.api.PacienteService;

@Stateless
public class PacienteServiceImpl implements PacienteService {

    @Inject
    private PacienteDAO pacienteDAO;
    
    @Inject 
    private PacienteMonitoradoDAO monitorDAO;

    @Override
    public Response getPacientes() {
        try {
            return Response.ok().entity(pacienteDAO.findAll()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response getPaciente(Integer id) {
        try {
            return Response.ok().entity(pacienteDAO.findById(id)).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response cadastrar(PacienteMonitorado paciente) {
        try {
            monitorDAO.insert(paciente);
            return Response.noContent().status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
}
