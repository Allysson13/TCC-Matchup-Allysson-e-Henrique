package repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import model.Contact;
import org.springframework.stereotype.Repository;

@Repository
public class ContactRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public void insert(Contact contact) {entityManager.merge(contact);}

}
