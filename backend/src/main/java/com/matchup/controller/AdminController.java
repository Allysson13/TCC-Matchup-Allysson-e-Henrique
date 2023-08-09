package com.matchup.controller;

import com.matchup.model.Interest;
import com.matchup.service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin")
public class AdminController {
    public final InterestService interestService;

    @Autowired
    public AdminController(InterestService interestService) {
        this.interestService = interestService;
    }

    @PostMapping("/register-interest")
    @PostAuthorize("true")
    public ResponseEntity<Interest> register(@RequestBody Interest interest) {
        System.out.println(interest.getName());
        return new ResponseEntity<>(interestService.saveInterest(interest), HttpStatus.CREATED);
    }

}
