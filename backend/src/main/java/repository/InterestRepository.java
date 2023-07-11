package repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import model.Interest;
import org.springframework.stereotype.Repository;

@Repository
public class InterestRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public void insert(Interest interest) {entityManager.merge(interest);}

}
