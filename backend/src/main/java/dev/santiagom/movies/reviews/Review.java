package dev.santiagom.movies.reviews;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "reviews")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    private ObjectId id;
    private String body;
    private String imdbId;
    private String username;

    public Review(String body, String imdbId, String username) {
        this.body = body;
        this.imdbId = imdbId;
        this.username = username;
    }
}
