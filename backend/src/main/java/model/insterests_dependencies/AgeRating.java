package model.insterests_dependencies;

import jakarta.persistence.*;

@Entity
@Table(name = "age_rating_interest", schema = "matchup")
public class AgeRating {

    @Id
    @Column(name="age_rating_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    // <editor-fold desc="Constructors">
    public AgeRating() {

    }

    public AgeRating(Long id, String name) {
        this.id = id;
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

    // </editor-fold>

    @Override
    public String toString() {
        return super.toString();
    }

}
