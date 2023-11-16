package dev.santiagom.movies.reviews;

import dev.santiagom.movies.jwt.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private JWTService jwtService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestHeader("Authorization") String authorization, @RequestBody Map<String, String> payload) {
        String username = getUsernameFromToken(authorization);
        return new ResponseEntity<Review>(reviewService
                .createReview(
                        payload.get("reviewBody"),
                        payload.get("imdbId"),
                        username),
                HttpStatus.CREATED);
    }

    private String getUsernameFromToken(String authorization) {
        String token = authorization.replace("Bearer ", "");
        return jwtService.getUsernameFromToken(token);
    }

}
