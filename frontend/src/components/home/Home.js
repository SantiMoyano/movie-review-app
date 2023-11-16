import React from "react";
import Hero from "../hero/Hero";
import GenresList from "../genres/GenresList";
import genres from "../../genresList.json";

function Home({ movies, handleGenreClick }) {
  return (
    <>
      <GenresList genres={genres} handleGenreClick={handleGenreClick} />
      <Hero movies={movies} />
    </>
  );
}

export default Home;
