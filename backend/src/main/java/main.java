import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import model.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;

public class main {
    private static EntityManagerFactory entityManagerFactory;
    private static EntityManager entityManager;

    public static void main(String[] args) {

        entityManagerFactory = Persistence.createEntityManagerFactory("postgresql-home");
        entityManager = entityManagerFactory.createEntityManager();

        User henrique = new model.User("Henrique", "henrique.lp2006@gmail.com", 17, "hash123", "5531988776655", null, null);
        User allysson = new model.User("Allysson", "assuncaoallyssonbruno@gmail.com", 17, "hash1234", "5531955443322", null, null);
        Address addressHenrique = new Address(56, "Rua Artur Bernardes", "Pioneiros", "Minas Gerais", 36492323);
        Address addressAllysson = new Address(438, "Avenida João Monlevade", "Pioneiros", "Minas Gerais", 36492-332);
        Interest interest1 = new Interest("The Witcher 3: Wild Hunt", "RPG", "Action RPG,Open World", "CD Project Red", "PC,XBOX,PS4,PS5", 69.90);
        Interest interest2 = new Interest("The Legend of Zelda: Tears of the Kingdom", "RPG", "Open World", "Nintendo", "Nintendo Switch", 359.90);
        Interest interest3 = new Interest("The Witcher 2: Assassins of Kings", "RPG", "Action RPG,Open World", "CD Project Red", "PC,XBOX,PS4,PS5", 39.90);
        Interest interest4 = new Interest("The Legend of Zelda: Breath of the Wild", "RPG", "Open World", "Nintendo", "Nintendo Switch", 159.90);


        //Message(Byte hashedContent, LocalDateTime date, String extension, User sender, User receiver, boolean statusViewed)
        //public Friendship(String status, LocalDateTime date, User user, User friend)
        //public Interest(String name, String genre, String subGenre, String company, String platform, double price)
        //public Address(int number, String street, String neighborhood, String state, int zipcode)
        //String name, String email, int age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address address)

        entityManager.getTransaction().begin();
        entityManager.persist(henrique);
        entityManager.persist(allysson);
        entityManager.persist(addressHenrique);
        entityManager.persist(addressAllysson);
        entityManager.persist(interest1);
        entityManager.persist(interest2);
        entityManager.persist(interest3);
        entityManager.persist(interest4);
        entityManager.getTransaction().commit();


        entityManager.find(User.class, henrique.getId()).setAddress(addressHenrique);
        entityManager.find(Address.class, addressHenrique.getId()).setUser(henrique);
        entityManager.find(User.class, allysson.getId()).setAddress(addressAllysson);
        entityManager.find(Address.class, addressAllysson.getId()).setUser(allysson);

        entityManager.getTransaction().begin();
        entityManager.persist(henrique);
        entityManager.persist(allysson);
        entityManager.persist(addressHenrique);
        entityManager.persist(addressAllysson);
        entityManager.getTransaction().commit();

        entityManager.find(User.class, henrique.getId()).addInterest(interest1);
        entityManager.find(User.class, henrique.getId()).addInterest(interest3);
        entityManager.find(User.class, henrique.getId()).addInterest(interest4);
        entityManager.find(User.class, allysson.getId()).addInterest(interest2);
        entityManager.find(User.class, allysson.getId()).addInterest(interest4);

        entityManager.getTransaction().begin();
        entityManager.persist(henrique);
        entityManager.persist(allysson);
        entityManager.persist(interest1);
        entityManager.persist(interest2);
        entityManager.persist(interest3);
        entityManager.persist(interest4);
        entityManager.getTransaction().commit();


        Friendship friendship1 = new Friendship("Pendente", LocalDateTime.now(), entityManager.find(User.class, henrique.getId()), entityManager.find(User.class, allysson.getId()));
        Friendship friendship2 = new Friendship("Pendente", LocalDateTime.now(), entityManager.find(User.class, allysson.getId()), entityManager.find(User.class, henrique.getId()));
        entityManager.find(User.class, henrique.getId()).addFriendship(friendship1);
        entityManager.find(User.class, allysson.getId()).addFriendship(friendship2);

        entityManager.getTransaction().begin();
        entityManager.persist(friendship1);
        entityManager.persist(friendship2);
        entityManager.persist(henrique);
        entityManager.persist(allysson);
        entityManager.getTransaction().commit();


        Message messageHpA = new Message("Ola, Bom dia!".getBytes(StandardCharsets.UTF_8), LocalDateTime.now(), ".txt", entityManager.find(User.class, henrique.getId()), entityManager.find(User.class, allysson.getId()), "RECEIVED");
        Message messageApH = new Message("Bom dia!".getBytes(StandardCharsets.UTF_8), LocalDateTime.now(), ".txt", entityManager.find(User.class, allysson.getId()), entityManager.find(User.class, henrique.getId()), "PENDING");
        entityManager.find(User.class, henrique.getId()).addSentMessage(messageHpA);
        entityManager.find(User.class, allysson.getId()).addReceivedMessage(messageHpA);
        entityManager.find(User.class, henrique.getId()).addReceivedMessage(messageApH);
        entityManager.find(User.class, allysson.getId()).addSentMessage(messageApH);

        entityManager.getTransaction().begin();
        entityManager.persist(messageHpA);
        entityManager.persist(messageApH);
        entityManager.persist(henrique);
        entityManager.persist(allysson);
        entityManager.getTransaction().commit();
        System.out.println(entityManager.find(User.class, henrique.getId()).getFriends().get(0).getContact().getName());

        System.out.println(new String(entityManager.find(User.class, henrique.getId()).getReceivedMessages().get(0).getHashedContent(), StandardCharsets.UTF_8));
        System.out.println(":)");

    }
}
