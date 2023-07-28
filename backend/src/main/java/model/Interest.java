package model;

import jakarta.persistence.*;
import model.insterests_dependencies.*;

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
    @Column(nullable = false)
    private List<Language> dubbing_interests;

    @ManyToMany(mappedBy = "subtitled_interest")
    @Column(nullable = false)
    private List<Language> subtitle_languages;

    @ManyToMany(mappedBy = "interests")
    @Column(nullable = false)
    private List<Genre> genres;

    @ManyToMany(mappedBy = "interests")
    @Column(nullable = false)
    private List<SubGenre> subGenre;

    @ManyToMany(mappedBy = "interests")
    @Column(nullable = false)
    private List<Platform> platforms;

    @ManyToOne
    @Column(nullable = false)
    private AgeRating ageRating;

    @ManyToMany(mappedBy = "interests")
    private List<User> users;


    // <editor-fold desc="Constructors">
    public Interest() {
    }


    // </editor-fold>

    // <editor-fold desc="Encapsulation">

    // </editor-fold>

    public void addUser(User user){
        if(this.users == null){
            this.users = new ArrayList<>();
        }
        this.users.add(user);
    }


}