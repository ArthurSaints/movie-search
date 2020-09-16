import React from "react";

import SearchIcon from "@material-ui/icons/Search";

import "./SearchBar.css";

function SearchBar() {
    return (
        <div className="searchBar">
            <div className="searchBar__icon">
                <SearchIcon />
            </div>
            <div className="searchBar__input">
                <input type="text" placeholder="Insert the keywords..." />
            </div>
        </div>
    );
}

export default SearchBar;
