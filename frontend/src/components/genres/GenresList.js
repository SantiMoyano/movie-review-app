import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./GenresList.css";

const GenresList = ({ genres, handleGenreClick }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  return (
    <section className="genreList">
      <h2>Genres List</h2>
      <div className="btn-group">
        {genres.map((genre) => (
          <Button
            key={genre.id}
            variant={genre === selectedGenre ? "outline-dark" : "outline-dark"}
            onClick={() => handleGenreClick(genre.name)}
            className="genre-btn"
          >
            {genre.name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default GenresList;
