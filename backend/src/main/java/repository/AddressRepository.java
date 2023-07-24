package repository;

import model.Address;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

    Page<Address> findById(long id);
    @Query("SELECT a FROM Address a WHERE a.street LIKE %:street%")
    Page<Address> findByPartOfTheStreet(@Param("street") String partOfTheStreet);
    //Page<Address> findByStreetLikeIgnoreCase(@Param("street") String partOfTheStreet);

    @Query("SELECT a FROM Address a WHERE a.neighborhood LIKE %:neighborhood%")
    Page<Address> findByPartOfTheNeighborhood(@Param("neighborhood") String partOfTheNeighborhood);

    @Query("SELECT a FROM Address a WHERE a.state LIKE %:state%")
    Page<Address> findByPartOfTheState(@Param("state") String partOfTheState);

    Page<Address> findByNumber(int number);

    Page<Address> findByZipcode(int zipcode);

}
