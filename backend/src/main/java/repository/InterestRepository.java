package repository;

import model.Interest;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestRepository extends JpaRepository<Interest, Long> {

    Page<Interest> findById(long id);

    @Query("SELECT i FROM Interest i WHERE i.name LIKE %:name%")
    Page<Interest> findByPartOfTheName(@Param("name") String partOfTheName);

    @Query("SELECT i FROM Interest i WHERE i.genre LIKE %:genre%")
    Page<Interest> findByPartOfTheGenre(@Param("genre") String partOfTheGenre);

    @Query("SELECT i FROM Interest i WHERE i.subGenre LIKE %:sub_genre%")
    Page<Interest> findByPartOfTheSubGenre(@Param("sub_genre") String partOfTheSubGenre);

    @Query("SELECT i FROM Interest i WHERE i.company LIKE %:company%")
    Page<Interest> findByPartOfTheCompany(@Param("company") String partOfTheCompany);

    @Query("SELECT i FROM Interest i WHERE i.platform LIKE %:platform%")
    Page<Interest> findByPartOfThePlatform(@Param("platform") String partOfThePlatform);

    //Price

    Page<Interest> findByAgeRating(int ageRating);

}
