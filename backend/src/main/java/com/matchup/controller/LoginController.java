package com.matchup.controller;

import com.matchup.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.matchup.service.UserService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/login")
public class LoginController {

    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/teste")
    public ResponseEntity<User> teste() {
        return new ResponseEntity<>(userService.saveUser(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/teste2/{userId}")
    public ResponseEntity<Optional<User>> teste2(@PathVariable("userId") Long userId) {
        return new ResponseEntity<>(userService.findById(Long.valueOf(userId)), HttpStatus.ACCEPTED);
    }

    @GetMapping("/teste3/{partOfTheName}")
    public ResponseEntity<List<User>> teste3(@PathVariable("partOfTheName") String partOfTheName) {
        return new ResponseEntity<>(userService.findByPartOfTheName(partOfTheName), HttpStatus.ACCEPTED);
    }

    @GetMapping("/login-teste/{email}/{password}")
    public ResponseEntity<Boolean> teste4(@PathVariable("email") String email, @PathVariable("password") String hashedPassword) {
        return new ResponseEntity<>(userService.findByEmailAndHashedPassword(email, hashedPassword), HttpStatus.ACCEPTED);
    }

    @GetMapping("/hello-world")
    public String hello() {
        return "Hello World!";
    }

    @PostMapping("/login-route")
    public ResponseEntity<String> receiveFormData(@RequestBody User user){

        return ResponseEntity.ok("Data received successfully!");

    }



}
