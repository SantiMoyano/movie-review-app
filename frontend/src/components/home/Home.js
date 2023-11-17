import React from "react";
import Hero from "../hero/Hero";
import GenresList from "../genres/GenresList";
import genres from "../../genresList.json";
import LastReviews from "../lastReviews/LastReviews";

function Home({ movies, handleGenreClick, allReviews }) {
  return (
    <>
      <GenresList genres={genres} handleGenreClick={handleGenreClick} />
      <Hero movies={movies} />
      <LastReviews allReviews={allReviews} />
    </>
  );
}

export default Home;
