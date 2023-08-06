package model.insterests_dependencies;

import jakarta.persistence.*;
import model.Interest;

import java.util.List;

@Entity
@Table(name = "sub_genre", schema = "matchup")
public class SubGenre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToMany
    private List<Interest> interests;

    // <editor-fold desc="Constructors">

    public SubGenre() {

    }

    public SubGenre(long id, String name) {
        this.id = id;
        this.name = name;
    }

    // </editor-fold>

    // <editor-fold desc="Encapsulation">

    public long getId() {
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
