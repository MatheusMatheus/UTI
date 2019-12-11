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
            return Response.ok().entity(terminalDAO.buscaTodos()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
	@Override
	public Response getTerminaisLivresParaMonitorar() {
        try {
            return Response.ok().entity(terminalDAO.buscaLivresParaMonitorar()).build();

        } catch (Exception e) {
            return Response.notModified().build();
        }
	}
	
	@Override
	public Response getTerminaisVinculados() {
        try {
            return Response.ok().entity(terminalDAO.buscaVinculados()).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}
	
	@Override
	public Response getTerminaisDesvinculados() {
        try {
            return Response.ok().entity(terminalDAO.buscaDesvinculados()).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}

    @Override
    public Response getTerminal(Integer id) {
        try {
            return Response.ok().entity(terminalDAO.buscaPorId(id)).build();

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
            terminalDAO.insere(terminal);
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

	@Override
	public Response editar(TerminalDTO terminalDTO) {
        try {
    		Terminal terminal = Terminal.builder()
        			.nome(terminalDTO.getNome())
        			.statusTerminal(terminalDTO.getStatusTerminal())
        			.build();
    		terminalDAO.atualizaTerminal(terminal);
    		return Response.noContent().status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
	}

}
