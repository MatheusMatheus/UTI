package br.ucb.uti.rest.service;


import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.Terminal;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.TerminalService;
import br.ucb.uti.rest.service.requisicoes.TerminalDTO;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;
import javax.ws.rs.core.Response;

@Stateless
public class TerminalServiceImpl implements TerminalService {

    @Inject
    private TerminalDAO terminalDAO;

    @Inject
    private PacienteDAO pacienteDAO;
    
    @Override
    public Response getTerminais() {
        try {
            return Response.ok().entity(terminalDAO.findAll()).build();

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
        	Paciente paciente = getPaciente(terminalDTO);
        	Terminal terminal = Terminal.builder()
        			.dataCadastro(terminalDTO.getDataCadastro())
        			.mac(terminalDTO.getMac())
        			.nome(terminalDTO.getNome())
        			.statusTerminal(terminalDTO.getStatusTerminal())
        			.paciente(paciente)
        			.build();
            terminalDAO.insert(terminal);
            return Response.noContent().status(Response.Status.ACCEPTED).build();
        } catch (Exception e) {
            return Response.notModified().build();
        }
    }
    
    private Paciente getPaciente(TerminalDTO terminalDTO) throws NoResultException {
    	Paciente paciente = pacienteDAO.findById(terminalDTO.getPaciente().getCpf());
    	if(paciente == null) {
    		throw new NoResultException();
    	}
    	return paciente;
    }
}
