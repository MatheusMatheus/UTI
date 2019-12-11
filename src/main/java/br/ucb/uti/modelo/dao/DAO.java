package br.ucb.uti.modelo.dao;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;

public interface DAO<T> {
    void insere(T entidade) throws SQLException;
    void atualiza(T entidade) throws SQLException;
    void exclui(T entidade) throws SQLException;
    List<T> buscaTodos() throws SQLException;
    T buscaPorId(Serializable id) throws SQLException;

}
