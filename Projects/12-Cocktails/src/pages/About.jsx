import React from "react";

const About = () => {
    return (
        <section className="section about-section">
            <h1>About this site</h1>
            <p>
                Creator:{" "}
                <a
                    href="https://github.com/mavenrank"
                    target="_blank"
                    className="external-links"
                >
                    Ananth S
                </a>
            </p>
            <p>
                Big thanks to{" "}
                <a
                    href="https://github.com/whoroopamgupta"
                    target="_blank"
                    className="external-links"
                >
                    Roopam Badoniya
                </a>{" "}
                for helping out in making this project. He has helped me learn
                React from scratch. He has extended help by teaching me how to
                code this website from scratch.
            </p>
            <p>
                This project is based on ReactJS. It uses an API from{" "}
                <a
                    href="https://www.thecocktaildb.com/"
                    target="_blank"
                    className="external-links"
                >
                    CockTail DB
                </a>{" "}
                Check out their{" "}
                <a
                    href="https://www.thecocktaildb.com/api.php"
                    target="_blanks"
                    className="external-links"
                >
                    APIs Here
                </a>. 
                It also uses React Router for managing the Routes. 
            </p>
            <p>Thanks for checking this site!</p>
        </section>
    );
};

export default About;
