package br.ucb.uti.modelo.dao;

import java.util.List;
import java.util.stream.Collectors;

import br.ucb.uti.modelo.Paciente;

public class PacienteDAO extends DAOImpl<Paciente> implements DAO<Paciente> {

    public PacienteDAO() {
        super(Paciente.class);
    }
    
    public List<Paciente> findNaoMonitorados() {
		return buscaTodos().stream()
    			.filter(paciente -> paciente.getMonitoramentos() == null || paciente.getMonitoramentos().isEmpty())
    			.collect(Collectors.toList());
    }
    
}
