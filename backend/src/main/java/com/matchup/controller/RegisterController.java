package com.matchup.controller;

import com.matchup.model.Interest;
import com.matchup.model.User;
import com.matchup.service.InterestService;
import com.matchup.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/register")
public class RegisterController {

    private final InterestService interestService;

    @Autowired
    public RegisterController(InterestService interestService) {
        this.interestService = interestService;
    }

    @GetMapping("/api/admin/register-interest")
    public ResponseEntity<Interest> register(@RequestBody Interest interest) {return new ResponseEntity<>(interestService.saveInterest(interest), HttpStatus.ACCEPTED);}

}
