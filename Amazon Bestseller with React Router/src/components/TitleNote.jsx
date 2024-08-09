import React from "react";

import { FaGithub } from "react-icons/fa";
const TitleNote = () => {

    const githubLink = () => {
        window.open("https://github.com/mavenrank/WDA-React/tree/main/Task%20-%201%20-%20Amazon%20BestSeller")
    }

    return (
        <React.Fragment>
            <div className="title-of-page">
                <div className="title">
                    <h1>Amazon BestSeller Clone</h1>
                    <p>
                        Our most popular products based on sales. Updated
                        frequently.
                    </p>
                </div>
                <div className="credits">
                    <FaGithub onClick={githubLink} className="github-icon"/>
                    <span>Ananth S</span>
                </div>
            </div>
            <p className="note">
                <span>Click on any book and Check the console after each click</span>
            </p>
        </React.Fragment>
    );
};

export default TitleNote;
