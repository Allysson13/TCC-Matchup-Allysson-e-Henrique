package model.insterests_dependencies;

import jakarta.persistence.*;

@Entity
@Table(name = "platform_interest", schema = "matchup")
public class Platform {

    @Id
    @Column(name="platform_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

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

    public void setName(String name) {
        this.name = name;
    }
    // </editor-fold>
}
