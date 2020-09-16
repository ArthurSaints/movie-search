import React, { useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";

import "./App.css";

const MovieDB = require("moviedb")("81890d19514340b6d557fc882c4fe533");

function App() {
    const [query, setQuery] = useState("");

    MovieDB.searchMovie({ query: query }, (err, res) => {
        if (res != null) console.log(res.results);
    });

    function getUserInput(userInput) {
        setQuery(userInput);
    }

    return (
        <div className="app">
            <Header />
            <SearchBar callBack={getUserInput} />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
        </div>
    );
}

export default App;
