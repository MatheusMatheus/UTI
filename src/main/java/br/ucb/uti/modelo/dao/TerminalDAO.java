package br.ucb.uti.modelo.dao;

import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Query;
import javax.persistence.TypedQuery;

import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.StatusTerminal;
import br.ucb.uti.modelo.Terminal;

public class TerminalDAO extends DAOImpl<Terminal> implements DAO<Terminal> {

	public TerminalDAO() {
		super(Terminal.class);
	}

	public List<Terminal> getByStatus(StatusTerminal status) {
		String sql = "SELECT t from Terminal t WHERE t.statusTerminal = :status";
		TypedQuery<Terminal> query = manager.createQuery(sql, Terminal.class);
		query.setParameter("status", status);
		return query.getResultList();
	}
	
	public List<Terminal> buscaVinculados() {
		return buscaTodos().stream()
				.filter(ter -> ter.getMonitoramentos() != null && !ter.getMonitoramentos().isEmpty())
				.collect(Collectors.toList());
	}
	
	public List<Terminal> buscaDesvinculados() {
		return buscaTodos().stream()
				.filter(ter -> ter.getMonitoramentos() == null || ter.getMonitoramentos().isEmpty())
				.collect(Collectors.toList());
	}

	public List<Terminal> buscaLivresParaMonitorar() {
		return buscaDesvinculados().stream()
				.filter(ter -> ter.getStatusTerminal().equals(StatusTerminal.ATIVO))
				.collect(Collectors.toList());
	}

	public boolean desvincula(Integer terminalID) {
		try {
			Terminal terminal = buscaPorId(terminalID);
			desvinculaPaciente(terminal.getMonitoramentos());
			terminal.setMonitoramentos(null);
			atualiza(terminal);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	private void desvinculaPaciente(List<Monitoramento> monitoramentos) {
		monitoramentos.forEach(monitoramento -> monitoramento.getPaciente().setMonitoramentos(null));
	}
	
	public void atualizaTerminal(Terminal terminal) {
		Query query = manager.createQuery("UPDATE Terminal SET nome = :nome, statusTerminal = :status");
		query.setParameter("nome", terminal.getNome());
		query.setParameter("status", terminal.getStatusTerminal());
		query.executeUpdate();
	}
}
