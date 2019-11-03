package br.ucb.uti.rest.service;


import br.ucb.uti.modelo.Terminal;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.TerminalService;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.core.Response;

@Stateless
public class TerminalServiceImpl implements TerminalService {

    @Inject
    private TerminalDAO dao;

    @Override
    public Response getTerminais() {
        try {
            return Response.ok().entity(dao.findAll()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response getTeminal(Integer id) {
        try {
            return Response.ok().entity(dao.findById(id)).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response cadastrar(Terminal terminal) {
        try {
            dao.insert(terminal);
            return Response.noContent().status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
}
