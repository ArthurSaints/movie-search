import React from "react";

import "./Movie.css";

function Movie() {
    const backdropath = "3gmVCt99mrIbX7Q89LjhlpglGvW";
    return (
        <div className="movie">
            <img
                className="movie__poster"
                src={`https://image.tmdb.org/t/p/w500/${backdropath}.jpg`}
                alt="poster"
            />
            <h4 className="movie__title">Título</h4>
            <span className="movie__rate">Nota</span>
        </div>
    );
}

export default Movie;
