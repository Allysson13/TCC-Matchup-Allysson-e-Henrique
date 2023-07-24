package repository;

import model.Friendship;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendshipRepository extends JpaRepository<Friendship, Long> {

    Page<Friendship> findById(long id);

    Page<Friendship> findByStatus(String status);

    /*@Query("SELECT f FROM Friendship f WHERE f.date LIKE %:date%")
    Page<Friendship> findByPartOfTheDate(@Param("date") String partOfTheDate);*/

    Page<Friendship> findByUser(long user);

    Page<Friendship> findByFriend(long friend);

}
