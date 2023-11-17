import "./LastReviews.css";

function LastReviews({ allReviews }) {
  return (
    <section className="last-reviews-container">
      <hr />
      <h2>Last reviews</h2>
      <ul>
        {allReviews.map((review) => {
          return <Review key={review.id} review={review} />;
        })}
      </ul>
    </section>
  );
}

function Review({ review }) {
  const timestamp = review.id.timestamp;
  const fecha = new Date(timestamp * 1000);
  const fechaFormateada = fecha.toLocaleString();
  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-center">
          <span>{review.body}</span>
          <span>{fechaFormateada}</span>

          <span className="badge bg-secondary">{review.username}</span>
        </div>
      </li>
      <hr />
    </>
  );
}

export default LastReviews;
