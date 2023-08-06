package com.matchup.repository;

import com.matchup.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

//    Page<User> findById(long id);
//    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
//    Page<User> findByPartOfTheName(@Param("name") String partOfTheName);
//
//    //Page<User> findByName(String name);
//    //Page<Address> findByNumber(int number);
//
//    @Query("SELECT u FROM User u WHERE u.cellphoneNumber LIKE %:cellphoneNumber%")
//    Page<User> findByPartOfTheCellphoneNumber(@Param("cellphoneNumber") String partOfTheCellphoneNumber);

}
