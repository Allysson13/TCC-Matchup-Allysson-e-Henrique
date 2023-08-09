package com.matchup.service;

import com.matchup.model.User;
import com.matchup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User userToSave){
        return userRepository.save(userToSave);
    }

    /*public User findById(Long id){
        //public User(String name, String email, LocalDateTime age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address
        //address)
        return userRepository.findById(id).get();
    }*/

    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }

    public boolean findByEmailAndHashedPassword(String email, String hashedPassword){
        return userRepository.findByEmailAndHashedPassword(email, hashedPassword).isEmpty();
    }

    public List<User> findByPartOfTheName(String partOfTheName){
        return userRepository.findByNameContainingIgnoreCase(partOfTheName);
    }

    public User saveUser(){
        //public User(String name, String email, LocalDateTime age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address
        //address)
        return userRepository.save(new User("Allysson", "allysson@gmail.com", LocalDateTime.now(), "2134234j3i4gig1234i", "(31)33334444", null, null));
    }



    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
