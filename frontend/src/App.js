import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import SessionManager from "./SessionManager";
import api from "./api/axiosConfig";
import Welcome from "./components/welcome/Welcome";

function App() {
  const { token, username, handleLogin, handleLogout } = SessionManager();
  const [isLoggedIn, setIsLoggedIn] = useState(token.length > 1);
  const [movies, setMovies] = useState();
  const [filteredMovies, setFilteredMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  const [allReviews, setAllReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      setFilteredMovies([...response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllReviews = async () => {
    try {
      const response = await api.get("/api/v1/reviews/all-reviews");
      setAllReviews(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.log(error);
    }
  };

  function handleGenreClick(genreName) {
    if (genreName === "All") {
      setFilteredMovies(movies);
    } else {
      const filteredMovies = movies.filter((movie) =>
        movie.genres.includes(genreName)
      );
      setFilteredMovies(filteredMovies);
    }
  }

  useEffect(() => {
    setIsLoggedIn(token.length > 3);
  }, [token, username, isLoggedIn]);

  useEffect(() => {
    getMovies();
    getAllReviews();
  }, []);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} />
      <Welcome username={username} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredMovies={filteredMovies}
              allMovies={movies}
              handleGenreClick={handleGenreClick}
              allReviews={allReviews}
            />
          }
        />
        <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/Reviews/:movieId"
          element={
            <Reviews
              getMovieData={getMovieData}
              movie={movie}
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
