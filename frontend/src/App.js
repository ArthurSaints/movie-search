import React, { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";

import "./App.css";

const MovieDB = require("moviedb")("81890d19514340b6d557fc882c4fe533");

function App() {
    const [query, setQuery] = useState("star");
    const [result, setResult] = useState([]);

    function getUserInput(userInput) {
        setQuery(userInput);
        if (query != null) {
            MovieDB.searchMovie({ query: query }, (err, res) => {
                if (res != null) {
                    console.log(res.results);
                    setResult(res.results);
                }
            });
        }
    }

    return (
        <div className="app">
            <Header />
            <SearchBar callBack={getUserInput} />

            {result.map(({ id, poster_path, title, vote_average }) => {
                return (
                    <Movie
                        key={id}
                        posterPath={poster_path}
                        title={title}
                        rate={vote_average}
                    />
                );
            })}
        </div>
    );
}

export default App;
