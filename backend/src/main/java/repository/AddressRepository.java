package repository;

import model.Address;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
    @Query("SELECT a FROM Address a WHERE a.street LIKE %:street%")
    Page<Address> findByPartOfTheStreet(@Param("street") String partOfTheStreet);

    @Query("SELECT a FROM Address a WHERE a.neighborhood LIKE %:neighborhood%")
    Page<Address> findByPartOfTheNeighborhood(@Param("street") String partOfTheStreet);

}
