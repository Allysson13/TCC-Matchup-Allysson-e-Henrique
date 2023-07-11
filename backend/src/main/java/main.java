import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;
import model.User;

public class main {
    private static EntityManagerFactory entityManagerFactory;
    private static EntityManager entityManager;

    public static void main(String[] args) {

        entityManagerFactory = Persistence.createEntityManagerFactory("postgresql-home");
        entityManager = entityManagerFactory.createEntityManager();

        User user = new User("henrique", "henrique.lp2006@gmail.com", 17, "hash123", "55031988776655");

        entityManager.getTransaction().begin();
        entityManager.persist(user);
        entityManager.getTransaction().commit();


    }
}
