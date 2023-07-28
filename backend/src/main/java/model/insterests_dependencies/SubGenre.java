package model.insterests_dependencies;

import jakarta.persistence.*;

@Entity
@Table(name = "sub_genre_interest", schema = "matchup")
public class SubGenre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

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

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return super.toString();
    }
}
