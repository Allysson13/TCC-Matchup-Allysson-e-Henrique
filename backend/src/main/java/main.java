import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import model.*;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.Date;

public class main {
    private static EntityManagerFactory entityManagerFactory;
    private static EntityManager entityManager;

    public static void main(String[] args) {

        entityManagerFactory = Persistence.createEntityManagerFactory("postgresql-school");
        entityManager = entityManagerFactory.createEntityManager();

        LocalDateTime date1 = LocalDateTime.of(2006, 3, 6, 8, 30);
        LocalDateTime date2 = LocalDateTime.of(2006, 4, 24, 20, 30);

        User henrique = new model.User("Henrique", "henrique.lp2006@gmail.com", date1, "hash123", "5531988776655", null, null);
        User allysson = new model.User("Allysson", "assuncaoallyssonbruno@gmail.com", date2, "hash1234", "5531955443322", null, null);
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

        save(henrique);
        save(allysson);
        save(addressHenrique);
        save(addressAllysson);
        save(interest1);
        save(interest2);
        save(interest3);
        save(interest4);


        setAddress(henrique, addressHenrique);
        setAddress(allysson, addressAllysson);


        addInterest(henrique, interest1);
        addInterest(henrique, interest3);
        addInterest(henrique, interest4);
        addInterest(henrique, interest2);
        addInterest(henrique, interest4);

        addFriend(henrique, allysson);


        Message messageHpA = new Message("Ola, Bom dia!".getBytes(StandardCharsets.UTF_8), LocalDateTime.now(), ".txt", entityManager.find(User.class, henrique.getId()), entityManager.find(User.class, allysson.getId()), "RECEIVED");
        Message messageApH = new Message("Bom dia!".getBytes(StandardCharsets.UTF_8), LocalDateTime.now(), ".txt", entityManager.find(User.class, allysson.getId()), entityManager.find(User.class, henrique.getId()), "PENDING");

        findUser(henrique).addSentMessage(messageHpA);
        findUser(henrique).addReceivedMessage(messageApH);
        findUser(allysson).addSentMessage(messageApH);
        findUser(allysson).addReceivedMessage(messageHpA);

        save(messageApH);
        save(messageHpA);
        save(allysson);
        save(henrique);


        System.out.println(entityManager.find(User.class, henrique.getId()).getFriends().get(0).getFriend().getName());

        System.out.println(new String(entityManager.find(User.class, henrique.getId()).getReceivedMessages().get(0).getHashedContent(), StandardCharsets.UTF_8));
        System.out.println(":)");

    }

    private static void save(Object o){
        entityManager.getTransaction().begin();
        entityManager.persist(o);
        entityManager.getTransaction().commit();
    }

    private static User findUser(User user){
        return entityManager.find(User.class, user.getId());
    }

    private static Address findAddress(Address address){
        return entityManager.find(Address.class, address.getId());
    }

    private static Interest findInterest(Interest interest){
        return entityManager.find(Interest.class, interest.getId());
    }

    private static void setAddress(User user, Address address){
        findUser(user).setAddress(address);
        findAddress(address).setUser(user);
        save(user);
        save(address);
    }

    private static void addInterest(User user, Interest interest){
        findUser(user).addInterest(interest);
        findInterest(interest).addUser(user);
        save(user);
        save(interest);
    }

    private static void addFriend(User user, User friend){
        user.solicitate(friend);
        friend.solicitate(user);
        save(user.getFriendshipWithThisUser(friend));
        save(friend.getFriendshipWithThisUser(user));
        save(user);
        save(friend);
    }
}
