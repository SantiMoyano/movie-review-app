import "./LastReviews.css";

function LastReviews({ allReviews, allMovies }) {
  return (
    <section className="last-reviews-container">
      <h2>Last Reviews</h2>
      <ul className="list-group">
        {allReviews.map((review) => {
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
            />
          );
        })}
      </ul>
    </section>
  );
}

function Review({ review, movieData, fechaFormateada }) {
  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column align-items-center">
            {movieData && (
              <figure className="mt-2">
                <img
                  src={movieData.poster}
                  alt={`Poster for ${movieData.title}`}
                  className="img-fluid"
                />
                <figcaption className="mt-2">Ver trailer</figcaption>
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
