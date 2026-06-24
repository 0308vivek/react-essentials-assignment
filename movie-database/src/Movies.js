import React, { useState } from "react";
import "./Movies.css";

function Movies() {
  const moviesList = [
    {
      id: 1,
      image: "/interstellarImage.jpeg",
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
    },
    {
      id: 2,
      image: "/startwars.avif",
      title: "Star Wars: A New Hope",
      year: 1977,
      genre: "Sci-Fi",
    },
    {
      id: 3,
      image: "/TheStar.jpg",
      title: "The Star",
      year: 2017,
      genre: "Animation",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [favouriteMovie, setFavouriteMovie] = useState([]);

  const handleFav = (movieTitle) => {
    if (favouriteMovie.includes(movieTitle)) {
      setFavouriteMovie(favouriteMovie.filter((title) => title !== movieTitle));
    } else {
      setFavouriteMovie([...favouriteMovie, movieTitle]);
    }
  };

  const filteredMovies = moviesList.filter((movie) => {
    const searchLower = searchTerm.toLowerCase();

    return (
      movie.title.toLowerCase().includes(searchLower) ||
      movie.genre.toLowerCase().includes(searchLower) ||
      movie.year.toString().includes(searchLower)
    );
  });

  return (
    <div className="bollywood-movies">
      <h1>Movie Explorer</h1>

      <div className="main-container">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search Movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          {searchTerm && (
            <p className="search-results">
              Found {filteredMovies.length} movie
              {filteredMovies.length !== 1 ? "s" : ""} for "{searchTerm}"
            </p>
          )}
        </div>

        {searchTerm && (
          <button className="clear-filters" onClick={() => setSearchTerm("")}>
            Clear Search
          </button>
        )}

        {/* MOVIES */}

        <div className="movie-grid">
          {filteredMovies.length === 0 ? (
            <div className="empty-state">
              <h3>No Movies Found</h3>
            </div>
          ) : (
            filteredMovies.map((movie) => (
              <div className="movie-card" key={movie.id}>
                <img src={movie.image} alt={movie.title} />

                <h3 className="movie-title">{movie.title}</h3>

                <p className="movie-year">{movie.year}</p>

                <p className="movie-genre">{movie.genre}</p>

                <button onClick={() => handleFav(movie.title)}>
                  {favouriteMovie.includes(movie.title)
                    ? "Unfavourite"
                    : "Favourite"}
                </button>
              </div>
            ))
          )}
        </div>

        {/* FAVOURITES */}

        <div className="favourite-section">
          <h2>Favourite Movies</h2>

          {favouriteMovie.length === 0 ? (
            <p className="empty-favourites">No favourite movies yet.</p>
          ) : (
            <div className="favourite-list">
              {favouriteMovie.map((movie) => (
                <p key={movie}>{movie}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Movies;
