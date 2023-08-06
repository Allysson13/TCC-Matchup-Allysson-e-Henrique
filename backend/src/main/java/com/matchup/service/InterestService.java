package com.matchup.service;

import com.matchup.model.Interest;
import com.matchup.repository.InterestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class InterestService {

    private final InterestRepository interestRepository;

    @Autowired
    public InterestService(InterestRepository interestRepository){this.interestRepository = interestRepository;}

    public Interest saveInterest(Interest interestToSave){
        return interestRepository.save(interestToSave);
    }

//    public Page<Interest> findByPartOfTheName(String partOfTheName){
//        return interestRepository.findByPartOfTheName(partOfTheName);
//    }

}
