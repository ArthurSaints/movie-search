import React, { useState } from "react";

import SearchIcon from "@material-ui/icons/Search";

import "./SearchBar.css";

function SearchBar(props) {
    const [input, setInput] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.callBack(input);
    }

    return (
        <div className="searchBar">
            <div className="searchBar__icon">
                <SearchIcon />
            </div>
            <div className="searchBar__input">
                <form onSubmit={handleSubmit}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Insert the keywords..."
                    />
                    <button type="submit" />
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
