package model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "interests", schema = "matchup")
public class Interest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "genre", nullable = false)
    private String email;

    @Column(name = "sub_genre", nullable = false)
    private String subGenre;

    @Column(name = "company", nullable = false)
    private String company;

    @Column(name = "platform", nullable = false)
    private String platform;

    @Column(name = "price", nullable = false)
    private double price;

    @ManyToMany(mappedBy = "interests")
    private List<User> users;


    // <editor-fold desc="Constructors">
    public Interest() {
    }

    public Interest(long id, String name, String email, String subGenre, String company, String platform, double price) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.subGenre = subGenre;
        this.company = company;
        this.platform = platform;
        this.price = price;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubGenre() {
        return subGenre;
    }

    public void setSubGenre(String subGenre) {
        this.subGenre = subGenre;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    // </editor-fold>

    @Override
    public String toString() {
        return "Interest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", subGenre='" + subGenre + '\'' +
                ", company='" + company + '\'' +
                ", platform='" + platform + '\'' +
                ", price=" + price +
                '}';
    }

}