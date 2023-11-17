package dev.santiagom.movies.reviews;

import dev.santiagom.movies.movies.Movie;
import dev.santiagom.movies.reviews.Review;
import dev.santiagom.movies.reviews.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Review> allReviews() {
        return reviewRepository.findAll();
    }

    public Review createReview(String reviewBody, String imdbId, String username) {
        Review review = reviewRepository.insert(new Review(reviewBody, imdbId, username));

        mongoTemplate.update(Movie.class)
                .matching(Criteria
                        .where("imdbId")
                        .is(imdbId))
                .apply(new Update()
                        .push("reviewIds")
                        .value(review))
                .first();

        return review;
    }
}
