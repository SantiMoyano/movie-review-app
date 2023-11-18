import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "./reviewForm/ReviewForm";
import api from "../../api/axiosConfig";
import SessionManager from "../../SessionManager";
import "./Review.css";

function Reviews({ getMovieData, movie, reviews, setReviews }) {
  const { token } = SessionManager();
  const revText = useRef();
  const params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const rev = revText.current;

    try {
      console.log(`Bearer ${token.slice(1, -1)}`);
      const response = await api.post(
        "/api/v1/reviews",
        {
          reviewBody: rev.value,
          imdbId: movieId,
        },
        {
          headers: {
            Authorization: `Bearer ${token.slice(1, -1)}`,
          },
        }
      );

      const updatedReviews = [...reviews, { body: rev.value }];

      rev.value = "";

      setReviews(updatedReviews);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="section-name">
            <h3>Reviews</h3>
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <div className="poster-container">
            <img src={movie?.poster} alt="" />
          </div>
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((r) => {
            return (
              <div key={r.body}>
                <Row>
                  <Col>{r.body}</Col>
                </Row>
                <Row>
                  <Col style={{ color: "yellow" }}>~ {r.username}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </div>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}

export default Reviews;
