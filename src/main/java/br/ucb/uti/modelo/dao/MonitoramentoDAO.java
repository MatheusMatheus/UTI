package br.ucb.uti.modelo.dao;

import br.ucb.uti.modelo.Monitoramento;

public class MonitoramentoDAO extends DAOImpl<Monitoramento> implements DAO<Monitoramento>{

    public MonitoramentoDAO() {
        super(Monitoramento.class);
    }

}
