package com.matchup.service;

import com.matchup.model.Interest;
import com.matchup.model.insterests_dependencies.*;
import com.matchup.model.insterests_dependencies.Company;
import com.matchup.repository.InterestRepository;
import com.matchup.repository.interest_dependencies.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
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
    private final CompanyRepository companyRepository;

    @Autowired
    public InterestService(InterestRepository interestRepository, AgeRatingRepository ageRatingRepository, GenreRepository genreRepository, SubGenreRepository subGenreRepository, LanguageRepository languageRepository, PlatformRepository platformRepository, CompanyRepository companyRepository) {
        this.interestRepository = interestRepository;
        this.ageRatingRepository = ageRatingRepository;
        this.genreRepository = genreRepository;
        this.subGenreRepository = subGenreRepository;
        this.languageRepository = languageRepository;
        this.platformRepository = platformRepository;
        this.companyRepository = companyRepository;
    }


    public Interest saveInterest(Interest interestToSave){
        return interestRepository.save(interestToSave);
    }

    public List<Interest> findByPartOfTheName(String partOfTheName){
        return interestRepository.findByPartOfTheName(partOfTheName);
    }

    public Company saveCompany(Company company){
        return companyRepository.save(company);
    }

    public List<Company> getAllCompanies(){
        return companyRepository.findAll();
    }

}
