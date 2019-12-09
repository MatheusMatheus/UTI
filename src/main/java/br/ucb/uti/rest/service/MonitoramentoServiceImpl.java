package br.ucb.uti.rest.service;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.Terminal;
import br.ucb.uti.modelo.dao.MonitoramentoDAO;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.MonitoramentoService;
import br.ucb.uti.rest.service.requisicoes.MonitoramentoDTO;

@Stateless
public class MonitoramentoServiceImpl implements MonitoramentoService {

	@Inject
	private MonitoramentoDAO monitoraDAO;

	@Inject
	private TerminalDAO terminalDAO;
	
	@Inject
	private PacienteDAO pacienteDAO;

	@Override
	public Response monitora(MonitoramentoDTO monitoramentoDTO) {
		try {
			Terminal terminal = terminalDAO.findById(monitoramentoDTO.getTerminal().getIdentificador());
			Paciente paciente = pacienteDAO.findById(monitoramentoDTO.getPaciente().getCpf());
			if (terminal == null || paciente == null) {
				throw new NoResultException();
			}

			Monitoramento monitoramento = Monitoramento.builder()
					.momentoConsulta(monitoramentoDTO.getMomentoConsulta())
					.pressaoConsultada(monitoramentoDTO.getPressaoConsultada())
					.temperaturaConsultada(monitoramentoDTO.getTemperaturaConsultada())
					.terminal(terminal)
					.paciente(paciente)
					.build();

			monitoraDAO.insert(monitoramento);

			return Response.noContent().status(Response.Status.ACCEPTED).build();
		} catch (Exception e) {
			return Response.notModified().build();
		}
	}

	@Override
	public Response associaPaciente(Integer id) {
		try {
			return Response.ok().entity(monitoraDAO.findByTerminalId(id)).build();
		} catch (Exception e) {
			return Response.notModified().build();
		}
	}
}
