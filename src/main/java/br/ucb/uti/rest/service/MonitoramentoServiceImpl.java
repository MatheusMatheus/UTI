package br.ucb.uti.rest.service;

import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.persistence.NoResultException;
import javax.ws.rs.core.Response;

import br.ucb.uti.modelo.EstadoPaciente;
import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.Paciente;
import br.ucb.uti.modelo.StatusTerminal;
import br.ucb.uti.modelo.Terminal;
import br.ucb.uti.modelo.dao.MonitoramentoDAO;
import br.ucb.uti.modelo.dao.PacienteDAO;
import br.ucb.uti.modelo.dao.TerminalDAO;
import br.ucb.uti.rest.service.api.MonitoramentoService;
import br.ucb.uti.rest.service.requisicoes.MonitoramentoDTO;
import lombok.Builder;
import lombok.Getter;

@Stateless
public class MonitoramentoServiceImpl implements MonitoramentoService {

	@Inject
	private MonitoramentoDAO monitoraDAO;

	@Inject
	private TerminalDAO terminalDAO;

	@Inject
	private PacienteDAO pacienteDAO;
	
	private Terminal terminal;
	
	private Paciente paciente;

	@Override
	public Response gravaMonitoramento(MonitoramentoDTO monitoramentoDTO) {
		try {
			terminal = terminalDAO.buscaPorId(monitoramentoDTO.getTerminal().getIdentificador());
			paciente = pacienteDAO.buscaPorId(monitoramentoDTO.getPaciente().getCpf());

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

			monitoraDAO.insere(monitoramento);
			
			if(isPacienteMorrendo(monitoramento)) {
				return pacienteMorrendo();
			} else {
				return Response.noContent().status(Response.Status.ACCEPTED).build();
			}

		} catch (Exception e) {
			return Response.notModified().build();
		}
	}

	@Override
	public Response monitora(Integer id) {
		try {
			return Response.ok().entity(monitoraDAO.findByTerminal(id, StatusTerminal.ATIVO)).build();
		} catch (Exception e) {
			return Response.notModified().build();
		}
	}
	
	private boolean isPacienteMorrendo(Monitoramento monitoramento) {
		EstadoPaciente estado = paciente.getEstadoPaciente();
		
		boolean temperaturaMaior = monitoramento.getTemperaturaConsultada() > estado.getTemperaturaMaxima();
		boolean temperaturaMenor = monitoramento.getTemperaturaConsultada() < estado.getTemperaturaMinima();
		
		boolean pressaoMaior = monitoramento.getPressaoConsultada().pressaoMaior(estado.getPressaoMaxima());
		boolean pressaoMenor = monitoramento.getPressaoConsultada().pressaoMenor(estado.getPressaoMinima());
		
		return temperaturaMaior || temperaturaMenor || pressaoMaior || pressaoMenor;
		
	}
	
	@SuppressWarnings("unchecked")
	public Response pacienteMorrendo() {
		List<Monitoramento> monitoramentos = (List<Monitoramento>)monitora(terminal.getIdentificador()).getEntity();
		
		RespostaPacienteMorrendo resposta = 
				RespostaPacienteMorrendo.builder()
				.monitoramentos(monitoramentos)
				.msgAlerta("Atenção! O paciente está morrendo! O paciente está morrendo!")
				.build();
		
		return Response.ok().entity(resposta).build();
	}
	
	@Getter
	@Builder
	public static class RespostaPacienteMorrendo {
		private List<Monitoramento> monitoramentos;
		private String msgAlerta;
	}
}
