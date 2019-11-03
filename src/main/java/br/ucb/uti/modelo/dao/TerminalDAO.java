package br.ucb.uti.modelo.dao;

import br.ucb.uti.modelo.Terminal;

public class TerminalDAO extends DAOImpl<Terminal> implements DAO<Terminal> {

    public TerminalDAO() {
        super(Terminal.class);
    }
}
