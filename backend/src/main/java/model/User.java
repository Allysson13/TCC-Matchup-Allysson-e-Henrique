package model;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
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

    @Column(name = "birth_date", nullable = false, updatable = false)
    private LocalDateTime birthDate;

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
    private List<Message> sentMessages = new ArrayList<>();

    @OneToMany(mappedBy = "receiver")
    private List<Message> receivedMessages;


    // <editor-fold desc="Constructors">
    public User() {

    }

    public User(String name, String email, LocalDateTime age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address address) {
        this.name = name;
        this.email = email;
        this.birthDate = age;
        this.hashedPassword = hashedPassword;
        this.cellphoneNumber = cellphoneNumber;
        this.profilePicture = profilePicture;
        this.address = address;
    }

    public User(long id, String name, String email, LocalDateTime age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address address, List<Friendship> friends, List<Interest> interests, List<Message> sentMessages, List<Message> receivedMessages) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = age;
        this.hashedPassword = hashedPassword;
        this.cellphoneNumber = cellphoneNumber;
        this.profilePicture = profilePicture;
        this.address = address;
        this.friends = friends;
        this.interests = interests;
        this.sentMessages = sentMessages;
        this.receivedMessages = receivedMessages;
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

    public LocalDateTime getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDateTime age) {
        this.birthDate = age;
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

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Friendship> getFriends() {
        return friends;
    }

    public void setFriends(List<Friendship> friends) {
        this.friends = friends;
    }

    public List<Interest> getInterests() {
        return interests;
    }

    public void setInterests(List<Interest> interests) {
        this.interests = interests;
    }

    public List<Message> getSentMessages() {
        return sentMessages;
    }

    public void setSentMessages(List<Message> sentMessages) {
        this.sentMessages = sentMessages;
    }

    public List<Message> getReceivedMessages() {
        return receivedMessages;
    }

    public void setReceivedMessages(List<Message> receivedMessages) {
        this.receivedMessages = receivedMessages;
    }
    // </editor-fold>

    public Friendship getFriendshipWithThisUser(User user){
        for(Friendship f: this.friends){
            if(user.getId() == f.getFriend().getId()){
                return f;
            }
        }
        return null;
    }

    public void addFriendship(Friendship friendship){
        if(this.friends == null){
            this.friends = new ArrayList<>();
        }
        this.friends.add(friendship);
    }

    public void solicitate(User friendToBeAdded){
        Friendship friendship = new Friendship("PENDING", LocalDateTime.now(), this, friendToBeAdded);//String status, LocalDateTime date, User user, User friend) {
        addFriendship(friendship);
    }

    public void acceptSolicitation(Friendship friendship){
        friendship.accept();
    }

    public void refuseSolicitation(Friendship friendship){
        friendship.refuse();
    }

    public void blockSolicitation(Friendship friendship){
        friendship.block();
    }

    public void addInterest(Interest interest){
        if(this.interests == null){
            this.interests = new ArrayList<>();
        }
        this.interests.add(interest);
    }

    public void addSentMessage(Message message){
        if(this.sentMessages == null){
            this.sentMessages = new ArrayList<>();
        }
        this.sentMessages.add(message);
    }

    public void addReceivedMessage(Message message){
        if(this.receivedMessages == null){
            this.receivedMessages = new ArrayList<>();
        }
        this.receivedMessages.add(message);
    }



    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", age=" + birthDate +
                ", hashedPassword='" + hashedPassword + '\'' +
                ", cellphoneNumber='" + cellphoneNumber + '\'' +
                ", profilePicture=" + Arrays.toString(profilePicture) +
                ", address=" + address +
                ", friends=" + friends +
                ", interests=" + interests +
                ", sentMessages=" + sentMessages +
                ", receivedMessages=" + receivedMessages +
                '}';
    }
}
