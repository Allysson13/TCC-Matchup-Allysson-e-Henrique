package com.matchup.controller;

import com.matchup.exceptions.InvalidPasswordException;
import com.matchup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/data-verification")
@CrossOrigin(origins = "*")
public class DataVerificationController {
    private final UserService userService;

    @Autowired
    public DataVerificationController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/email/check-availability/{email}")
    public ResponseEntity<String> verifyEmail(@PathVariable String email) {
        if (userService.existsByEmail(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already in use!");
        }
        return ResponseEntity.ok("Email is available");
    }

    @GetMapping("/username/check-availability/{username}")
    public ResponseEntity<String> verifyUsername(@PathVariable String username) {
        if (userService.existsByUsername(username)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already in use!");
        }
        return ResponseEntity.ok("Username is available");
    }

    @GetMapping("/email/exists/{email}")
    public ResponseEntity<String> verifyEmailNotRegistered(@PathVariable String email) {
        if (!userService.existsByEmail(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email not registered yet!");
        }
        return ResponseEntity.ok("Email is available");
    }

    @GetMapping("/username/exists/{username}")
    public ResponseEntity<String> verifyUsernameNotRegistered(@PathVariable String username) {
        if (!userService.existsByUsername(username)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username not registered yet!");
        }
        return ResponseEntity.ok("Username is available");
    }

    @GetMapping("/password/check-pattern/{password}")
    public ResponseEntity<String> verifyPassword(@PathVariable String password) throws InvalidPasswordException {
        if (!userService.verifyPassword(password)) {
            throw new InvalidPasswordException();
        }
        return ResponseEntity.ok("Password is valid!");
    }

    /*@GetMapping("/{emailOrUsername}")
    public ResponseEntity<Boolean> verifyEmailOrUsername(@PathVariable String emailOrUsername) {
        return new ResponseEntity<>(userService.existsByEmailOrUsername(emailOrUsername, emailOrUsername), HttpStatus.ACCEPTED);
    }*/

    @GetMapping("/{date}")
    public ResponseEntity<Boolean> verifyDate(@PathVariable LocalDate date) {
        return new ResponseEntity<>(userService.verifyDate(date), HttpStatus.ACCEPTED);
    }

    @GetMapping("/code/{inputCode}")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Boolean> confirmEmailByCode(@PathVariable String inputCode) {
        return new ResponseEntity<>(userService.verifyCode(inputCode), HttpStatus.ACCEPTED);
    }

}
