package repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import model.Address;
import org.springframework.stereotype.Repository;

@Repository
public class AddressRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public void insert(Address address) {entityManager.merge(address);}

}
