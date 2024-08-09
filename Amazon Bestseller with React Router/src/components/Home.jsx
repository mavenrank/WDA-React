import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import TitleNote from "./TitleNote";
import { Route } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <TitleNote></TitleNote>
            <div className="main-div">
                <div className="left-section">
                    <LeftSection></LeftSection>
                </div>
                <div className="right-section">
                    <RightSection></RightSection>
                </div>
            </div>
        </div>
    );
};

export default Home;
