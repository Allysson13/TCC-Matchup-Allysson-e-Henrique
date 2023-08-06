package com.matchup.model;

import com.matchup.model.insterests_dependencies.*;
import jakarta.persistence.*;
import com.matchup.model.insterests_dependencies.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "interests", schema = "matchup")
public class Interest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "company", nullable = false)
    private String company;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToMany(mappedBy = "dubbed_interests")
    private List<Language> dubbingInterests;

    @ManyToMany(mappedBy = "subtitled_interest")
    private List<Language> subtitleLanguages;

    @ManyToMany(mappedBy = "interests")
    private List<Genre> genres;

    @ManyToMany(mappedBy = "interests")
    private List<SubGenre> subGenre;

    @ManyToMany(mappedBy = "interests")
    private List<Platform> platforms;

    @ManyToOne
    private AgeRating ageRating;

    @ManyToMany(mappedBy = "interests")
    private List<User> users;


    // <editor-fold desc="Constructors">
    public Interest() {
    }

    public Interest(String name, String company, double price, List<Language> dubbingInterests, List<Language> subtitleLanguages, List<Genre> genres, List<SubGenre> subGenre, List<Platform> platforms, AgeRating ageRating, List<User> users) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.dubbingInterests = dubbingInterests;
        this.subtitleLanguages = subtitleLanguages;
        this.genres = genres;
        this.subGenre = subGenre;
        this.platforms = platforms;
        this.ageRating = ageRating;
        this.users = users;
    }



    // </editor-fold>

    // <editor-fold desc="Encapsulation">

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<Language> getDubbingInterests() {
        return dubbingInterests;
    }

    public void setDubbingInterests(List<Language> dubbingInterests) {
        this.dubbingInterests = dubbingInterests;
    }

    public List<Language> getSubtitleLanguages() {
        return subtitleLanguages;
    }

    public void setSubtitleLanguages(List<Language> subtitleLanguages) {
        this.subtitleLanguages = subtitleLanguages;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    public List<SubGenre> getSubGenre() {
        return subGenre;
    }

    public void setSubGenre(List<SubGenre> subGenre) {
        this.subGenre = subGenre;
    }

    public List<Platform> getPlatforms() {
        return platforms;
    }

    public void setPlatforms(List<Platform> platforms) {
        this.platforms = platforms;
    }

    public AgeRating getAgeRating() {
        return ageRating;
    }

    public void setAgeRating(AgeRating ageRating) {
        this.ageRating = ageRating;
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
    // </editor-fold>

    public void addUser(User user){
        if(this.users == null){
            this.users = new ArrayList<>();
        }
        this.users.add(user);
    }


}