package br.ucb.uti.modelo.dao;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;

public interface DAO<T> {
    void insert(T entidade) throws SQLException;
    void update(T entidade) throws SQLException;
    void delete(T entidade) throws SQLException;
    List<T> findAll() throws SQLException;
    T findById(Serializable id) throws SQLException;

}
