package model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "friendships", schema = "matchup")
public class Friendship {
    @Id
    @Column(name = "friendship_id", nullable = false)
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


    public Friendship() {

    }


}
