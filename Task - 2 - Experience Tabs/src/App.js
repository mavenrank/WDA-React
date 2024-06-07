import React, { useState } from "react";
import "./App.css"
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import { FaGithub } from "react-icons/fa";

const App = () => {
    const [index, SetIndex] = useState(1);
    const [activeIndex, SetActiveIndex] = useState(1);
    const handleClick = (id) => {
        console.log(id);
        SetIndex(id);
        SetActiveIndex(id);
    }

    const clickGitHub = () => {
        window.open("https://github.com/mavenrank/WDA-React")
    }

    return (
        <React.Fragment>
            <div className="heading-div">
                <h1>Experience Tabs</h1>
                <div className="underline"></div>
            </div>
            <div className="content">
                <div className="left-section">
                    <LeftSection clickHandler = {handleClick} activeIndex={activeIndex}></LeftSection>
                </div>
                <div className="right-section">
                    <RightSection index={index}></RightSection>
                </div>
            </div>
            <div className="footer">
                <span>Ananth S</span>
                <span></span>
                <span><button onClick={() => clickGitHub()}><FaGithub className="github-icon"/></button></span>
            </div>
        </React.Fragment>
    );
};

export default App;
