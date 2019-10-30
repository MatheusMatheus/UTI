package br.ucb.uti.modelo.dao;

import java.io.Serializable;
import java.util.List;

public interface DAO<T> {
    void insert(T entidade);
    void update(T entidade);
    void delete(T entidade);
    List<T> findAll();
    T findById(Serializable id);

}
