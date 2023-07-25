package Controller;

import model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping("/api/login-route")
    public ResponseEntity<String> receiveFormData(@RequestBody User user){

        return ResponseEntity.ok("Data received successfully!");

    }

}
