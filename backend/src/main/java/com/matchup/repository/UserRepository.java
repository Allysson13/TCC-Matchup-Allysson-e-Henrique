package com.matchup.repository;

import com.matchup.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //List<User> findById(long id);

    List<User> findByName(String name);
    //List<Address> findByNumber(int number);

    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
    List<User> findByPartOfTheName(@Param("name") String partOfTheName);

    @Query("SELECT u FROM User u WHERE u.cellphoneNumber LIKE %:cellphoneNumber%")
    List<User> findByPartOfTheCellphoneNumber(@Param("cellphoneNumber") String partOfTheCellphoneNumber);

}