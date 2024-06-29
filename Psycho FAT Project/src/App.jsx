import React from "react";
import FetchedData from "./components/FetchedData";
import InputedData from "./components/InputedData";

const App = () => {
    return (
        <React.Fragment>
            <h1>MotherFucker's WebDEV FAT Question</h1>
            <p>This is a Final Exam question given by Sridhar Raj S</p>
            <p className="swearing">maa ki chut teri jhaant barabar padhaya sale madarchod</p>
            <p>Only 10 mins was provided to execute this React Question when we had basically no knowledge of React back then.</p>
            <p>It ruined my many of my friends' GPAs, this is my take at his fucking question</p>
            <h2>Task At Hand</h2>
            <p>Take in inputs of two fields. One Field would be the category name and the Other would be the sub-categories under the category.</p>
            <p>These should be displayed into two dropdowns. When one of them is selected then alter the values of the other dropdown to show its subcategories</p>
            <h2>Implementation using Input Fields</h2>
            <InputedData />
            <h3>Showing Brands and Models from DataJS</h3>
            <p>Demonstrating using Car Brands and their respective models</p>
            <FetchedData />
        </React.Fragment>
    );
};

export default App;
