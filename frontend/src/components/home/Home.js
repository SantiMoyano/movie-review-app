import React from "react";
import Hero from "../hero/Hero";
import GenresList from "../genres/GenresList";
import genres from "../../genresList.json";

function Home({ movies }) {
  return (
    <>
      <GenresList genres={genres} />
      <Hero movies={movies} />
    </>
  );
}

export default Home;
