package br.ucb.uti.modelo.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import java.io.Serializable;
import java.util.List;

public class DAOImpl<T> implements DAO<T> {

    private final Class<T> clazz;

    public DAOImpl(Class<T> clazz) {
        this.clazz = clazz;
    }

    @PersistenceContext(unitName = "UTI-PU")
    private EntityManager manager;

    @Override
    public void insert(T entidade) {
        try {
            this.manager.persist(entidade);
        } catch (Exception e) {

        }
    }

    @Override
    public void update(T entidade) {
        this.manager.merge(entidade);
    }

    @Override
    public void delete(T entidade) {
        this.manager.remove(entidade);
    }

    @Override
    public List<T> findAll() {
        CriteriaQuery<T> cq = manager.getCriteriaBuilder().createQuery(clazz);
        cq.select(cq.from(clazz));
        return manager.createQuery(cq).getResultList();
    }

    @Override
    public T findById(Serializable id) {
        return this.manager.find(clazz, id);
    }
}
