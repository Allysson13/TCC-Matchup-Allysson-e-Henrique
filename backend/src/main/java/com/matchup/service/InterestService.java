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

import java.util.ArrayList;
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

    public List<Interest> findByPartOfTheName(String partOfTheName){
        return interestRepository.findByPartOfTheName(partOfTheName);
    }


    // SAVE
    public Interest saveInterest(Interest interestToSave){
        interestToSave.setCompany(companyRepository.findById(interestToSave.getCompany().getId()).get());
        List<Platform> platforms = new ArrayList<>();
        for(Platform platform : interestToSave.getPlatforms()){
            platforms.add(platformRepository.findById(platform.getId()).get());
        } 
        interestToSave.setPlatforms(platforms);
        interestToSave.setAgeRating(ageRatingRepository.findById(interestToSave.getAgeRating().getId()).get());
        return interestRepository.save(interestToSave);
    }

    public Company saveCompany(Company company){
        return companyRepository.save(company);
    }

    public Language saveLanguage(Language language){
        return languageRepository.save(language);
    }

    public AgeRating saveAgeRating(AgeRating ageRating){
        return ageRatingRepository.save(ageRating);
    }

    public Genre saveGenre(Genre genre){
        return genreRepository.save(genre);
    }

    public SubGenre saveSubGenre(SubGenre subGenre){
        return subGenreRepository.save(subGenre);
    }

    public Platform savePlatform(Platform platform){
        return platformRepository.save(platform);
    }

    // GET ALL
    public List<Interest> getAllInterests(){
        return interestRepository.findAll();
    }

    public List<Company> getAllCompanies(){
        return companyRepository.findAll();
    }

    public List<Language> getAllLanguages(){
        return languageRepository.findAll();
    }

    public List<AgeRating> getAllAgeRatings(){
        return ageRatingRepository.findAll();
    }

    public List<Genre> getAllGenres(){
        return genreRepository.findAll();
    }

    public List<SubGenre> getAllSubGenres(){
        return subGenreRepository.findAll();
    }

    public List<Platform> getAllPlatforms(){
        return platformRepository.findAll();
    }

}
