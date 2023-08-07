package com.matchup.controller;

import com.matchup.service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    public final InterestService interestService;

    @Autowired
    public AdminController(InterestService interestService) {
        this.interestService = interestService;
    }

//    @PostMapping("")
//    public

}
