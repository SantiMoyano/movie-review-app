import "./LastReviews.css";
import { useNavigate } from "react-router-dom";
function LastReviews({ allReviews, allMovies }) {
  const navigate = useNavigate();
  const reversedReviews = [...allReviews].reverse();
  const lastFiveReviews = reversedReviews.slice(0, 5);
  function goToReviewTrailer(trailerId) {
    navigate(`/Trailer/${trailerId}`);
  }
  return (
    <section className="last-reviews-container">
      <h2>Last Reviews</h2>
      <ul className="list-group">
        {lastFiveReviews.map((review) => {
          const timestamp = review.id.timestamp;
          const fecha = new Date(timestamp * 1000);
          const fechaFormateada = fecha.toLocaleString();
          const movieData = allMovies?.find(
            (movie) => movie.imdbId === review.imdbId
          );

          return (
            <Review
              key={review.id.timestamp}
              review={review}
              movieData={movieData}
              fechaFormateada={fechaFormateada}
              goToReviewTrailer={goToReviewTrailer}
            />
          );
        })}
      </ul>
    </section>
  );
}

function Review({ review, movieData, fechaFormateada, goToReviewTrailer }) {
  return (
    <>
      <li className="list-group-item">
        <div className="last-review-card d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center">
            {movieData && (
              <figure className="mt-2">
                <img
                  src={movieData.poster}
                  alt={`Poster for ${movieData.title}`}
                  className="img-fluid"
                />
                <figcaption
                  onClick={() =>
                    goToReviewTrailer(
                      movieData.trailerLink.substring(
                        movieData.trailerLink.length - 11
                      )
                    )
                  }
                  className="mt-2"
                >
                  Watch trailer
                </figcaption>
              </figure>
            )}
          </div>
          <div className="review-info">
            <div>
              <span className="badge bg-dark text-light fs-6">
                {review.username}
              </span>
            </div>
            <div>
              <span id="date">{fechaFormateada}</span>
            </div>
            <div>
              <span>{review.body}</span>
            </div>
          </div>
        </div>
      </li>
      <hr />
    </>
  );
}

export default LastReviews;
