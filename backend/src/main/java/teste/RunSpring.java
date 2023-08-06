package teste;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import repository.UserRepository;
import service.UserService;

@SpringBootApplication
public class RunSpring  {

    public static void main(String[] args) {
        SpringApplication.run(RunSpring.class, args);
    }

    @RestController
    static class TextController {

        @GetMapping("/hello")
        public String hello() {
            return "hello world";
        }


    }


}
