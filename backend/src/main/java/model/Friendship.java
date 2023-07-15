package model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "friendships", schema = "matchup")
public class Friendship {
    @Id
    @Column(name = "friendship_id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "status", nullable = false, updatable = true)
    private String status;

    @Column(name = "date", nullable = false, updatable = false)
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false, updatable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "friend_id", nullable = false, updatable = false)
    private User contact;

    // <editor-fold desc="Constructors">
    public Friendship() {

    }

    public Friendship(String status, LocalDateTime date, User user, User contact) {
        this.status = status;
        this.date = date;
        this.user = user;
        this.contact = contact;
    }
    // </editor-fold>


    public long getId() {
        return id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getContact() {
        return contact;
    }

    public void setContact(User contact) {
        this.contact = contact;
    }

    @Override
    public String toString() {
        return "Friendship{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", date=" + date +
                ", user=" + user +
                ", contact=" + contact +
                '}';
    }
}
