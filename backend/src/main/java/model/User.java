package model;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.List;

@Entity
@Table(name = "user", schema = "matchup")
public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "age", length = 3, nullable = false, updatable = false)
    private int age;

    @Column(name = "hashed_password", length = 455, nullable = false, updatable = true)
    private String hashedPassword;

    @Column(name = "cellphone_number", length = 455, nullable = false)
    private String cellphoneNumber;

    @Column(name = "profile_picture", length = 455, updatable = true)
    private Byte[] profilePicture;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "address_id")
    private Address address;

    @OneToMany(mappedBy = "user")
    private List<Friendship> friends;

    @ManyToMany
    private List<Interest> interests;

    @OneToMany(mappedBy = "sender")
    private List<Message> sentMessages;

    @OneToMany(mappedBy = "receiver")
    private List<Message> receivedMessages;

    public User() {

    }

    public User(String name, String email, int age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.hashedPassword = hashedPassword;
        this.cellphoneNumber = cellphoneNumber;
        this.profilePicture = profilePicture;
    }

    public User(String name, String email, int age, String hashedPassword, String cellphoneNumber) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.hashedPassword = hashedPassword;
        this.cellphoneNumber = cellphoneNumber;
    }

    public long getId() {
        return this.id;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHashedPassword() {
        return hashedPassword;
    }

    public void setHashedPassword(String hashedPassword) {
        this.hashedPassword = hashedPassword;
    }

    public String getCellphoneNumber() {
        return cellphoneNumber;
    }

    public void setCellphoneNumber(String cellphoneNumber) {
        this.cellphoneNumber = cellphoneNumber;
    }

    public Byte[] getProfilePicture() {
        return profilePicture;
    }

    public void setProfilePicture(Byte[] profilePicture) {
        this.profilePicture = profilePicture;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + age +
                ", hashedPassword='" + hashedPassword + '\'' +
                ", cellphoneNumber='" + cellphoneNumber + '\'' +
                ", profilePicture=" + Arrays.toString(profilePicture) +
                '}';
    }
}
