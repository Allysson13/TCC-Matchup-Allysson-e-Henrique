package teste;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class RunSpring  {

    public static void main(String[] args) {
        SpringApplication.run(RunSpring.class, args);
    }

    @RestController
    static class TextController {

        @GetMapping("/hello")
        public ResponseEntity hello() {
            return "hello world";
        }

    }


}
