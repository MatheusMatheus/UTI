package br.ucb.uti.rest.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.Terminal;
import br.ucb.uti.modelo.dao.MonitoramentoDAO;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.MonitoramentoService;
import br.ucb.uti.rest.service.requisicoes.MonitoramentoDTO;

@Stateless
public class MonitoramentoServiceImpl implements MonitoramentoService {

	@Inject
	private MonitoramentoDAO monitoraDAO;

	@Inject
	private TerminalDAO terminalDAO;

	@Override
	public Response associaPaciente(MonitoramentoDTO monitoramentoDTO) {
		try {
			Terminal terminal = terminalDAO.findById(monitoramentoDTO.getTerminal().getIdentificador());
			if (terminal == null) {
				throw new NoResultException();
			}

			Monitoramento monitoramento = Monitoramento.builder()
					.momentoConsulta(monitoramentoDTO.getMomentoConsulta())
					.pressaoConsultada(monitoramentoDTO.getPressaoConsultada())
					.temperaturaConsultada(monitoramentoDTO.getTemperaturaConsultada())
					.terminal(terminal)
					.build();

			monitoraDAO.insert(monitoramento);

			return Response.noContent().status(Response.Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.notModified().build();
		}
	}

	@Override
	public Response monitora(String id) {
		try {
			List<Monitoramento> monitoramentos = monitoraDAO.findAll();
			return Response.ok().entity(monitoraDAO.findPacienteId(id)).build();

		} catch (Exception e) {
			return Response.notModified().build();
		}
	}
}
