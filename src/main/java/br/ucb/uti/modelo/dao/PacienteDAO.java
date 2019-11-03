package br.ucb.uti.modelo.dao;

import br.ucb.uti.modelo.Paciente;

public class PacienteDAO extends DAOImpl<Paciente> implements DAO<Paciente> {

    public PacienteDAO() {
        super(Paciente.class);
    }
}
