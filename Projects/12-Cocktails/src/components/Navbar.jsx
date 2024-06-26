import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    const handleGithub = () => {
        window.open(
            "https://github.com/mavenrank/WDA-React/tree/main/Projects/12-Cocktails"
        );
    };
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <img src={logo} alt="cocktail logo db" />
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <div className="credits">
                            <a onClick={handleGithub}>
                                <FaGithub className="github-icon" />
                                <span>Ananth S</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
