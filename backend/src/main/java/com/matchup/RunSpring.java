package com.matchup;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.filter.CorsFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class RunSpring  {

    public static void main(String[] args) {
        SpringApplication.run(RunSpring.class, args);
    }
}
