package br.ucb.uti.rest.service;

import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.rest.service.api.PacienteService;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.core.Response;

@Stateless
public class PacienteServiceImpl implements PacienteService {

    @Inject
    private PacienteDAO dao;

    @Override
    public Response getPacientes() {
        try {
            return Response.ok().entity(dao.findAll()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response getPaciente(Integer id) {
        try {
            return Response.ok().entity(dao.findById(id)).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response cadastrar(Paciente paciente) {
        try {
            dao.insert(paciente);
            return Response.noContent().status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
}
