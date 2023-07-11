package model;

import jakarta.persistence.*;

@Entity
@Table(name = "address", schema = "matchup")
public class Address {

    //attributes

    @Id
    @Column(name = "address_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "number", nullable = false, length = 10)
    private int number;

    @Column(name = "street", nullable = false)
    private String street;

    @Column(name = "neighborhood", nullable = false)
    private String neighborhood;

    @Column(name = "state", nullable = false)
    private String state;

    @Column(name = "zipcode", nullable = false, length = 12)
    private int zipcode;

    @OneToOne(mappedBy = "address")
    private User user;

    //constructors
    public Address() {

    }

    public Address(long id, int number, String street, String neighborhood, String state, int zipcode) {
        this.id = id;
        this.number = number;
        this.street = street;
        this.neighborhood = neighborhood;
        this.state = state;
        this.zipcode = zipcode;
    }

    //encapsulation

    public long getId() {
        return id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }

    //methods

    @Override
    public String toString() {
        return super.toString();
    }

}
