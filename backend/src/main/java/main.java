import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import model.Address;
import model.User;

public class main {
    private static EntityManagerFactory entityManagerFactory;
    private static EntityManager entityManager;

    public static void main(String[] args) {

        entityManagerFactory = Persistence.createEntityManagerFactory("postgresql-home");
        entityManager = entityManagerFactory.createEntityManager();

        User user = new model.User("Henrique", "henrique.lp2006@gmail.com", 17, "hash123", "5531988776655", null, null);
        Address address = new Address(56, "Rua Artur Bernardes", "Pioneiros", "Minas Gerais", 36492323);
        //public Address(int number, String street, String neighborhood, String state, int zipcode)
        //String name, String email, int age, String hashedPassword, String cellphoneNumber, Byte[] profilePicture, Address address)

        entityManager.getTransaction().begin();
        entityManager.persist(user);
        entityManager.persist(address);
        entityManager.getTransaction().commit();

        entityManager.find(User.class, user).setAddress(address);
        entityManager.find(Address.class, address).setU



    }
}
