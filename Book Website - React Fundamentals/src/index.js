import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types'; 
import "./index.css";
import Book from "./components/Book"
import HardcodedBookList from "./components/HardcodedBooklist"
import DynamicBookList from "./components/DynamicBookList"

import {Greeting} from "./components/Greeting"

// setting proptypes of greeting js
const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
};
Greeting.PropTypes = {
    text: PropTypes.string,
    name: PropTypes.string,
    user: PropTypes.object, 
}
Greeting.defaultProps = {
    text: "TEXT HERE",
    name: "NAME HERE",
    user: {
        username: "USERNAME HERE",
        userimgURL: "IMG URL HERE",
        userSize: "IMG SIZE HERE"
    }
}


const Webpage = () => {
    return (
        <div className="mainDiv">
            <h1>Welcome to our BookStore</h1>
            {/* <HardcodedBookList></HardcodedBookList> */}
            {/* <DynamicBookList></DynamicBookList> */}
            {/* <Greeting text="Hello!" name="Roopam" user={ user }></Greeting> */}
            <div className="emptyDiv">
                <p>PROOF OF IMAGE URL WORKING</p>
                <img src="https://i.imgur.com/yXOvdOSs.jpg"></img>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Webpage />);
