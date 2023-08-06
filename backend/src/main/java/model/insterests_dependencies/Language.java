package model.insterests_dependencies;

import jakarta.persistence.*;
import model.Interest;

import java.util.List;

@Entity
@Table(name = "language", schema = "matchup")
public class Language {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToMany
    private List<Interest> dubbed_interests;

    @ManyToMany
    private List<Interest> subtitled_interest;

    // <editor-fold desc="Constructors">
    public Language() {
    }

    public Language(String name) {
        this.name = name;
    }
    // </editor-fold>

    // <editor-fold desc="Encapsulation">
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Interest> getDubbed_interests() {
        return dubbed_interests;
    }

    public void setDubbed_interests(List<Interest> dubbed_interests) {
        this.dubbed_interests = dubbed_interests;
    }

    public List<Interest> getSubtitled_interest() {
        return subtitled_interest;
    }

    public void setSubtitled_interest(List<Interest> subtitled_interest) {
        this.subtitled_interest = subtitled_interest;
    }

    // </editor-fold>
}
