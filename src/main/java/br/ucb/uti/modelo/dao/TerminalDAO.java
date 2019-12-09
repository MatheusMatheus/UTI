package br.ucb.uti.modelo.dao;

import java.util.List;

import javax.persistence.TypedQuery;

import br.ucb.uti.modelo.StatusTerminal;
import br.ucb.uti.modelo.Terminal;

public class TerminalDAO extends DAOImpl<Terminal> implements DAO<Terminal> {

    public TerminalDAO() {
        super(Terminal.class);
    }
    
    public List<Terminal> getByStatus(StatusTerminal status) {
    	TypedQuery<Terminal> query = manager.createQuery("SELECT t from Terminal t WHERE t.statusTerminal = :status", Terminal.class);
    	query.setParameter("status", status);
    	return query.getResultList();
    }
}
