package br.ucb.uti.rest.service;

import javax.inject.Inject;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.PacienteMonitorado;
import br.ucb.uti.modelo.dao.MonitoramentoDAO;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.modelo.dao.PacienteMonitoradoDAO;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.MonitoramentoService;

public class MonitoramentoServiceImpl implements MonitoramentoService {

	@Inject
	private PacienteDAO pacienteDAO;
	
	@Inject
	private TerminalDAO terminalDAO;
	
	@Inject
	private MonitoramentoDAO monitoraDAO;
	
	@Inject
	private PacienteMonitoradoDAO pacienteMonitoradoDAO;

	@Override
	public Response monitora(Monitoramento monitoramento) {
		try {
			monitoraDAO.insert(monitoramento);
			return Response.noContent().status(Response.Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.notModified().build();
		}
	}

	@Override
	public Response associaPaciente(PacienteMonitorado monitoramento) {
		try {
			terminalDAO.insert(monitoramento.getTerminal());
			pacienteDAO.insert(monitoramento.getPaciente());
			pacienteMonitoradoDAO.insert(monitoramento);
			return Response.noContent().status(Response.Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.notModified().build();
		}
	}

}
