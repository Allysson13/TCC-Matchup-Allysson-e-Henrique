package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import repository.UserRepository;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

}
