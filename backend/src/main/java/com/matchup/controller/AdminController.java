package com.matchup.controller;

import com.matchup.model.Interest;
import com.matchup.model.User;
import com.matchup.model.insterests_dependencies.Company;
import com.matchup.service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/admin")
public class AdminController {
    public final InterestService interestService;

    @Autowired
    public AdminController(InterestService interestService) {
        this.interestService = interestService;
    }


    @PostMapping("/register/interest")
    @PostAuthorize("true")
    public ResponseEntity<Interest> registerInterest(@RequestBody Interest interest) {
        return new ResponseEntity<>(interestService.saveInterest(interest), HttpStatus.CREATED);
    }

    @PostMapping("/register/company")
    @PostAuthorize("true")
    public ResponseEntity<Company> registerCompany(@RequestBody Company company) {
        return new ResponseEntity<>(interestService.saveCompany(company), HttpStatus.CREATED);
    }


    @GetMapping("/get/all/company")
    public ResponseEntity<List<Company>> getAllCompanies() {
        return new ResponseEntity<>(interestService.getAllCompanies(), HttpStatus.ACCEPTED);
    }


}
