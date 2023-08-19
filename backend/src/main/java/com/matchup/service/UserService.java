package com.matchup.service;

import com.matchup.dto.UserDto;
import com.matchup.model.Address;
import com.matchup.model.User;
import com.matchup.repository.InterestRepository;
import com.matchup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final InterestRepository interestRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, InterestRepository interestRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.interestRepository = interestRepository;
    }

    public User saveUser(User userToSave){
        //requires password verification
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


    public List<User> findByPartOfTheName(String partOfTheName){
        return userRepository.findByNameContainingIgnoreCase(partOfTheName);
    }

    public boolean findByEmailAndHashedPassword(String email, String hashedPassword){
        Optional<User> user = userRepository.findByEmailAndHashedPassword(email, hashedPassword);
        if(user.isEmpty()){

        }
        return userRepository.findByEmailAndHashedPassword(email, hashedPassword).isEmpty();
    }

    public boolean existsByEmail(String email){
        return userRepository.existsByEmail(email);
    }

    public User registerUser(UserDto userDto){
        User userToRegister = new User();
        Address addressToRegister = new Address();

        userToRegister.setName(userDto.getName());
        userToRegister.setEmail(userDto.getEmail());
        userToRegister.setBirthDate(userDto.getBirthDate());
        userToRegister.setHashedPassword(
                passwordEncoder.encode(userDto.getRawPassword()));
        userToRegister.setCellphoneNumber(userDto.getCellphoneNumber());
        userToRegister.setProfilePicture(userDto.getProfilePicture());
        userToRegister.setInterests(
                interestRepository.findAllById(userDto.getInterests()));

        addressToRegister.setNumber(userDto.getAddressNumber());
        addressToRegister.setStreet(userDto.getAddressStreet());
        addressToRegister.setNeighborhood(userDto.getAddressNeighborhood());
        addressToRegister.setState(userDto.getAddressState());
        addressToRegister.setZipcode(userDto.getAddressZipcode());

        userToRegister.setAddress(addressToRegister);
        return userRepository.save(userToRegister);
    }



    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

}
