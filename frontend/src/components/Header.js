import React from "react";

import Logo from "../images/logo-vermelho-preto.png";

import "./Header.css";

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={Logo} alt="muvy logo" />
            {/* <div className="header__title">FIND THE MOVIE WITH US!</div> */}
        </div>
    );
}

export default Header;
