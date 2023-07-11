package repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import model.Message;
import org.springframework.stereotype.Repository;

@Repository
public class MessageRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public void insert(Message message) {entityManager.merge(message);}

}
