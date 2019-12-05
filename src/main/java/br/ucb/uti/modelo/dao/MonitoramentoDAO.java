package br.ucb.uti.modelo.dao;

import javax.persistence.TypedQuery;

import br.ucb.uti.modelo.Monitoramento;

public class MonitoramentoDAO extends DAOImpl<Monitoramento> implements DAO<Monitoramento>{

    public MonitoramentoDAO() {
        super(Monitoramento.class);
    }
    
    public Monitoramento findPacienteId(String cpf) {
    	TypedQuery<Monitoramento> query = manager.createNamedQuery("Monitoramento.findPacienteId", Monitoramento.class);
    	query.setParameter("pacienteID", cpf);
    	return query.getSingleResult();
    }
    
}
