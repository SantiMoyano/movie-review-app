function LastReviews({ allReviews }) {
  console.log(allReviews);
  return (
    <section>
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
  return (
    <li>
      {review.body} {review.username}
    </li>
  );
}

export default LastReviews;
