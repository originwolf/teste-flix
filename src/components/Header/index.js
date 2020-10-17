import React from "react";
import Logo from "../../assets/images/logo.png"
import "./index.css"

function Header() {
    return (
        <header className="container-fluid">
            <nav className="navbar navbar-dark bg-dark row">
                {/*eslint-disable-next-line */}
                <a className="navbar-brand col-5 col-sm-3 col-md-2" href="#">
                    <img className="img-fluid" src={Logo} alt="aulaflix homepage"></img>
                </a>
            </nav>
        </header>
      );
}

export default Header;