package service;

import model.Address;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import repository.UserRepository;

import java.time.LocalDateTime;

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

    public Page<User> findByPartOfTheName(String partOfTheName){
        return userRepository.findByPartOfTheName(partOfTheName);
    }

    public User saveUser(){
        //public User(String name, String email, LocalDateTime age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address
        //address)
        return userRepository.save(new User("henrique", "henrique.lp2006@gmail.com", LocalDateTime.now(), "eqweqw", "(31)1212121", null, null));
    }

}
