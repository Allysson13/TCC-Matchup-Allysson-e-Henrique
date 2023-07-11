package model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Contact", schema = "matchup")
@IdClass(ContactID.class)
public class Contact {

    //attributes

    @Id
    @Column(name = "contact_id1", nullable = false)
    private long idUser1;

    @Id
    @Column(name = "contact_id2", nullable = false)
    private long idUser2;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "message_id")
    private List<Message> message;

    //constructors

    public Contact() {

    }

    public Contact(long id_user1, long id_user2) {
        //implement something to get the ids from the respective users right away
        this.idUser1 = id_user1;
        this.idUser2 = id_user2;
    }

    //encapsulation

    public long getIdUser1() {
        return idUser1;
    }

    public long getIdUser2() {
        return idUser2;
    }

    //methods

    @Override
    public String toString() {
        return super.toString();
    }

}
