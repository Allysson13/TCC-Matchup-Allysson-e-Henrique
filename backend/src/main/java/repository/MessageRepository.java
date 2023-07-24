package repository;

import model.Message;
import model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    /*@Query("SELECT m FROM Message m WHERE m.date LIKE %:date%")
    Page<Message> findByPartOfTheDate(@Param("date") String partOfTheDate);*/
    Page<Message> findByExtension(String extension);
    Page<Message> findBySender(User sender);

    Page<Message> findByReceiver(User receiver);

}
