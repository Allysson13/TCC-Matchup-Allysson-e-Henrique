package model;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "Message", schema = "matchup")
public class Message {

    //attributes

    @Id
    @Column(name = "message_id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "hashed_content", nullable = false, length = 1023)
    private Byte hashedContent;

    @Column(name = "date", nullable = false, updatable = false)
    private LocalDateTime date;

    @Column(name = "extension", nullable = false, length = 5)
    private String extension;


    @ManyToOne
    @JoinColumn(name = "sender", nullable = false, updatable = false)
    private User sender;

    @ManyToOne
    @JoinColumn(name = "receiver", nullable = false, updatable = false)
    private User receiver;

    @Column(name = "status_viewed", nullable = false)
    private boolean statusViewed;


    //constructors

    public Message() {

    }



    //encapsulation



}
