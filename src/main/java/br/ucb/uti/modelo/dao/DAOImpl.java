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
    protected EntityManager manager;

    @Override
    public void insere(T entidade) {
        try {
            this.manager.persist(entidade);
        } catch (Exception e) {

        }
    }

    @Override
    public void atualiza(T entidade) {
        this.manager.merge(entidade);
    }

    @Override
    public void exclui(T entidade) {
        this.manager.remove(entidade);
    }

    @Override
    public List<T> buscaTodos() {
        CriteriaQuery<T> cq = manager.getCriteriaBuilder().createQuery(clazz);
        cq.select(cq.from(clazz));
        return manager.createQuery(cq).getResultList();
    }

    @Override
    public T buscaPorId(Serializable id) {
        return this.manager.find(clazz, id);
    }
}
