package Controller;

import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import service.UserService;

@RestController
public class LoginController {

    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/teste")
    public String teste() {
        userService.saveUser();
        return "hello world";
    }

    @PostMapping("/api/login-route")
    public ResponseEntity<String> receiveFormData(@RequestBody User user){

        return ResponseEntity.ok("Data received successfully!");

    }



}
