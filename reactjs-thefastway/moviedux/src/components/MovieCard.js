import React, { useState, useEffect } from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  const handleImageError = (e) => (e.target.src = "/images/default.jpg");
  const getRatingColor = (rating) => {
    let color = "rating-bad";
    if (rating >= 8) color = "rating-good";
    if (rating >= 5 && rating < 8) color = "rating-ok";
    console.log(`Rating color for ${movie.title}: ${color}`);
    return color;
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`/images/${movie.image}`}
        alt={movie.title}
        className="movie-poster"
        onError={handleImageError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingColor(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
