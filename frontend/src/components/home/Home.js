import React from "react";
import Hero from "../hero/Hero";
import GenresList from "../genres/GenresList";
import genres from "../../genresList.json";
import LastReviews from "../lastReviews/LastReviews";

function Home({ filteredMovies, allMovies, handleGenreClick, allReviews }) {
  return (
    <>
      <GenresList genres={genres} handleGenreClick={handleGenreClick} />
      <Hero filteredMovies={filteredMovies} />
      <LastReviews allReviews={allReviews} allMovies={allMovies} />
    </>
  );
}

export default Home;
