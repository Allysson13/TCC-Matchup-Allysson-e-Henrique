package com.matchup.controller;

import com.matchup.model.Interest;
import com.matchup.service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    public final InterestService interestService;

    @Autowired
    public AdminController(InterestService interestService) {
        this.interestService = interestService;
    }

    @PostMapping("/api/admin/register-interest")
    public ResponseEntity<Interest> register(@RequestBody Interest interest) {return new ResponseEntity<>(interestService.saveInterest(interest), HttpStatus.CREATED);}

}
