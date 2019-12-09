package br.ucb.uti.modelo.dao;

import javax.persistence.TypedQuery;

import br.ucb.uti.modelo.Monitoramento;
import br.ucb.uti.modelo.StatusTerminal;

public class MonitoramentoDAO extends DAOImpl<Monitoramento> implements DAO<Monitoramento> {

	public MonitoramentoDAO() {
		super(Monitoramento.class);
	}

	public Monitoramento findByTerminal(Integer terminalID, StatusTerminal status) {
		TypedQuery<Monitoramento> query = manager.createNamedQuery("Monitoramento.findByTerminalId", Monitoramento.class);
		query.setParameter("terminalID", terminalID);
		query.setParameter("status", status);
		return query.getSingleResult();
	}
}
