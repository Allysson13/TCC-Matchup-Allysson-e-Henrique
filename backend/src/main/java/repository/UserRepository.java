package repository;

import model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
    Page<User> findByPartOfTheName(@Param("name") String partOfTheName);

    Page<User> findByName(String name);
    //Page<Address> findByNumber(int number);
}
