package br.ucb.uti.rest.service;


import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.StatusTerminal;
import br.ucb.uti.modelo.Terminal;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.TerminalService;
import br.ucb.uti.rest.service.requisicoes.TerminalDTO;

@Stateless
public class TerminalServiceImpl implements TerminalService {

    @Inject
    private TerminalDAO terminalDAO;

    @Override
    public Response getTerminais() {
        try {
            return Response.ok().entity(terminalDAO.findAll()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
	@Override
	public Response getTerminaisLivres() {
        try {
            return Response.ok().entity(terminalDAO.findLivres()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
	}

    @Override
    public Response getTerminal(Integer id) {
        try {
            return Response.ok().entity(terminalDAO.findById(id)).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

    @Override
    public Response cadastrar(TerminalDTO terminalDTO) {
        try {
        	Terminal terminal = Terminal.builder()
        			.dataCadastro(terminalDTO.getDataCadastro())
        			.mac(terminalDTO.getMac())
        			.nome(terminalDTO.getNome())
        			.statusTerminal(terminalDTO.getStatusTerminal())
        			.build();
            terminalDAO.insert(terminal);
            return Response.noContent().status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }

	@Override
	public Response getByStatus(String status) {
        try {
        	StatusTerminal statusTerminal = StatusTerminal.valueOf(status.toUpperCase());
            return Response.ok().entity(terminalDAO.getByStatus(statusTerminal)).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}

	@Override
	public Response desvincula(Integer id) {
        try {
            return Response.ok().entity(terminalDAO.desvincula(id)).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}
}
