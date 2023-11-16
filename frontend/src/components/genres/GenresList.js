import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./GenresList.css";

const GenresList = ({ genres }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    // fetchMoviesByGenre(genre);
  };

  return (
    <section>
      <h2>Genres List</h2>
      <div className="btn-group">
        {genres.map((genre) => (
          <Button
            key={genre.id}
            variant={genre === selectedGenre ? "primary" : "secondary"}
            onClick={() => handleGenreClick(genre)}
          >
            {genre.name}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default GenresList;
