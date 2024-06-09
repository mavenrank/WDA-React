import React from "react";

import "./App.css";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";

function App() {
    return (
        <React.Fragment>
            <h1>Amazon BestSeller</h1>
            <p className="note">Click on any book and Check the console after each click</p>
            <div className="main-div">
                <div className="left-section">
                    <LeftSection></LeftSection>
                </div>
                <div className="right-section">
                    <RightSection></RightSection>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
