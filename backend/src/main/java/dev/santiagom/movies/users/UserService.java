package dev.santiagom.movies.users;

import dev.santiagom.movies.users.User;
import dev.santiagom.movies.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> allUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        if (user.getId() == null) {
            user.setId(null); // Asegura que el _id sea nulo para que MongoDB lo genere.
        }
        return userRepository.save(user);
    }

}
