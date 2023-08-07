package com.matchup.service;

import com.matchup.model.Interest;
import com.matchup.model.insterests_dependencies.*;
import com.matchup.repository.InterestRepository;
import com.matchup.repository.interest_dependencies.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterestService {

    private final InterestRepository interestRepository;
    private final AgeRatingRepository ageRatingRepository;
    private final GenreRepository genreRepository;
    private final SubGenreRepository subGenreRepository;
    private final LanguageRepository languageRepository;
    private final PlatformRepository platformRepository;


    @Autowired
    public InterestService(InterestRepository interestRepository, AgeRatingRepository ageRatingRepository, GenreRepository genreRepository, SubGenreRepository subGenreRepository, LanguageRepository languageRepository, PlatformRepository platformRepository) {
        this.interestRepository = interestRepository;
        this.ageRatingRepository = ageRatingRepository;
        this.genreRepository = genreRepository;
        this.subGenreRepository = subGenreRepository;
        this.languageRepository = languageRepository;
        this.platformRepository = platformRepository;
    }


    public Interest saveInterest(Interest interestToSave){
        return interestRepository.save(interestToSave);
    }

    public List<Interest> findByPartOfTheName(String partOfTheName){
        return interestRepository.findByPartOfTheName(partOfTheName);
    }

}
