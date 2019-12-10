package br.ucb.uti.modelo.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import br.ucb.uti.modelo.Paciente;

public class PacienteDAO extends DAOImpl<Paciente> implements DAO<Paciente> {

    public PacienteDAO() {
        super(Paciente.class);
    }
    
    public List<Paciente> findNaoMonitorados() {
    	TypedQuery<Paciente> query = manager.createNamedQuery("Paciente.findNaoMonitorados", Paciente.class);
		return query.getResultList();
    }
    
}
