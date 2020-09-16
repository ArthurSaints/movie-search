import React from "react";

import "./Movie.css";

function Movie({ posterPath, title, rate }) {
    return (
        <div className="movie">
            <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                alt="poster"
            />
            <h4 className="movie__title">{title}</h4>
            <span className="movie__rate">{rate}</span>
        </div>
    );
}

export default Movie;
