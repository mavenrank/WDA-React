import React from "react";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <Link to="/">
                <button className="back-button">Back to Books</button>
            </Link>
            <div className="about-centre">
                <p>
                    Welcome to the Amazon Bestseller Clone! This project is a
                    front-end web application inspired by the Amazon Bestseller
                    list. It allows users to browse a curated selection of the
                    most popular products based on sales.
                </p>
                <br />
                <hr />
                <br />
                <ul>
                    Features:
                    <li>
                        User-friendly Interface: Navigate easily through
                        different categories and product details.
                    </li>
                    <li>
                        Interactive Experience: Click on any product to explore
                        more and see the updates in your console.
                    </li>
                    <li>
                        This project is built using modern web technologies and
                        aims to provide a robust user experience while emulating
                        the look and feel of the original Amazon Bestseller
                        page.
                    </li>
                </ul>
                <br></br>
                <hr />
                <br></br>
                <p>Frameworks used in this Project</p>
                <ul>
                    <li>React JS</li>
                    <li>React Router</li>
                    <li>React Icons</li>
                </ul>
                <br />
                <hr />
                <br />
                <p>Upcoming Features</p>
                <ul>
                    <li>React Redux</li>
                    <li>Cart Functionality</li>
                    <li>Sign-In Functionality</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
