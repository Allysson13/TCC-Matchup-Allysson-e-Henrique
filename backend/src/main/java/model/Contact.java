package model;

import jakarta.persistence.*;
import org.hibernate.annotations.CompositeType;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "Contact", schema = "matchup")
@IdClass(ContactID.class)
public class Contact {
    //attributes
    @Embeddable
    public static class Pk implements Serializable {
        @Column(name = "id_user_1", nullable=false, updatable=false)
        private Long idUser1;

        @Column(name = "id_user_2", nullable=false, updatable=false)
        private Long idUser2;
    }

    @EmbeddedId
    private Pk id;

    @OneToMany(mappedBy = "message_id")
    private List<Message> message;

    //constructors

    public Contact() {

    }

    public Pk getId() {
        return id;
    }

    public List<Message> getMessage() {
        return message;
    }

    public void setMessage(List<Message> message) {
        this.message = message;
    }

    //methods

    @Override
    public String toString() {
        return super.toString();
    }

}
