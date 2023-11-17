package dev.santiagom.movies.reviews;

import dev.santiagom.movies.jwt.JWTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @Autowired
    private JWTService jwtService;

    @GetMapping("/all-reviews")
    public ResponseEntity<List<Review>> findAllReviews() {
        return new ResponseEntity<>(reviewService.allReviews(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestHeader("Authorization") String authorization, @RequestBody Map<String, String> payload) {
        String username = getUsernameFromToken(authorization);
        System.out.println(authorization);
        System.out.println(username);
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
