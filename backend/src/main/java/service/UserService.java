package service;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import repository.UserRepository;

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

}
