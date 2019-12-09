package br.ucb.uti.modelo.dao;

import javax.persistence.TypedQuery;

import br.ucb.uti.modelo.Monitoramento;

public class MonitoramentoDAO extends DAOImpl<Monitoramento> implements DAO<Monitoramento> {

	public MonitoramentoDAO() {
		super(Monitoramento.class);
	}

	public Monitoramento findByTerminalId(Integer terminalID) {
		TypedQuery<Monitoramento> query = manager.createNamedQuery("Monitoramento.findByTerminalId", Monitoramento.class);
		query.setParameter("terminalID", terminalID);
		return query.getSingleResult();
	}
}
