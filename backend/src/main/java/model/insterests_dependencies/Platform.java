package model.insterests_dependencies;

import jakarta.persistence.*;
import model.Interest;

import java.util.List;

@Entity
@Table(name = "platform", schema = "matchup")
public class Platform {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @ManyToMany
    private List<Interest> interests;

    // <editor-fold desc="Constructors">
    public Platform() {
    }

    public Platform(String name) {
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

    public List<Interest> getInterests() {
        return interests;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setInterests(List<Interest> interests) {
        this.interests = interests;
    }

    // </editor-fold>

    @Override
    public String toString() {
        return super.toString();
    }

}
