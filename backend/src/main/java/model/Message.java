package model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "Message", schema = "matchup")
public class Message {

    @Id
    @Column(name = "message_id", nullable = false, updatable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "hashed_content", nullable = false, length = 1023)
    private byte[] hashedContent;

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
    private String statusViewed;


    // <editor-fold desc="Constructors">
    public Message() {

    }

    public Message(byte[] hashedContent, LocalDateTime date, String extension, User sender, User receiver, String statusViewed) {
        this.hashedContent = hashedContent;
        this.date = date;
        this.extension = extension;
        this.sender = sender;
        this.receiver = receiver;
        this.statusViewed = statusViewed;
    }
    // </editor-fold>

    // <editor-fold desc="Encapsulation">
    public long getId() {
        return id;
    }

    public byte[] getHashedContent() {
        return hashedContent;
    }

    public void setHashedContent(byte[] hashedContent) {
        this.hashedContent = hashedContent;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public User getReceiver() {
        return receiver;
    }

    public void setReceiver(User receiver) {
        this.receiver = receiver;
    }

    public String getStatusViewed() {
        return statusViewed;
    }

    public void setStatusViewed(String statusViewed) {
        this.statusViewed = statusViewed;
    }
    // </editor-fold>


}
