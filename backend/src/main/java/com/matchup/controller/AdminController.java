package com.matchup.controller;

import com.matchup.model.Interest;
import com.matchup.model.User;
import com.matchup.model.insterests_dependencies.AgeRating;
import com.matchup.model.insterests_dependencies.Company;
import com.matchup.model.insterests_dependencies.Genre;
import com.matchup.model.insterests_dependencies.Language;
import com.matchup.model.insterests_dependencies.Platform;
import com.matchup.model.insterests_dependencies.SubGenre;
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

    @RequestMapping("/register")
    @PostMapping("/interest")
    @PostAuthorize("true")
    public ResponseEntity<Interest> registerInterest(@RequestBody Interest interest) {
        return new ResponseEntity<>(interestService.saveInterest(interest), HttpStatus.CREATED);
    }

    @PostMapping("/company")
    @PostAuthorize("true")
    public ResponseEntity<Company> registerCompany(@RequestBody Company company) {
        return new ResponseEntity<>(interestService.saveCompany(company), HttpStatus.CREATED);
    }

    @PostMapping("/genre")
    @PostAuthorize("true")
    public ResponseEntity<Genre> registerGenre(@RequestBody Genre genre) {
        return new ResponseEntity<>(interestService.saveGenre(genre), HttpStatus.CREATED);
    }

    @PostMapping("/subGenre")
    @PostAuthorize("true")
    public ResponseEntity<SubGenre> registerSubGenre(@RequestBody SubGenre subGenre) {
        return new ResponseEntity<>(interestService.saveSubGenre(subGenre), HttpStatus.CREATED);
    }

    @PostMapping("/platform")
    @PostAuthorize("true")
    public ResponseEntity<Platform> registerPlatform(@RequestBody Platform platform) {
        return new ResponseEntity<>(interestService.savePlatform(platform), HttpStatus.CREATED);
    }



    @RequestMapping("/get")
    @GetMapping("/interest/all")
    public ResponseEntity<List<Interest>> getAllInterests() {
        return new ResponseEntity<>(interestService.getAllInterests(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/company/all")
    public ResponseEntity<List<Company>> getAllCompanies() {
        return new ResponseEntity<>(interestService.getAllCompanies(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/language/all")
    public ResponseEntity<List<Language>> getAllLanguages() {
        return new ResponseEntity<>(interestService.getAllLanguages(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/age-rating/all")
    public ResponseEntity<List<AgeRating>> getAllAgeRatings() {
        return new ResponseEntity<>(interestService.getAllAgeRatings(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/genre/all")
    public ResponseEntity<List<Genre>> getAllGenre() {
        return new ResponseEntity<>(interestService.getAllGenres(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/sub-genre/all")
    public ResponseEntity<List<SubGenre>> getAllSubGenre() {
        return new ResponseEntity<>(interestService.getAllSubGenres(), HttpStatus.ACCEPTED);
    }

    @GetMapping("/plataform/all")
    public ResponseEntity<List<Platform>> getAllPlatforms() {
        return new ResponseEntity<>(interestService.getAllPlatforms(), HttpStatus.ACCEPTED);
    }

}
