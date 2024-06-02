import React, { useState } from "react";

const ChangeTitle = () => {
    const [text, setText] = useState("Current Title");
    const handleClick = () => {
        if (text === "Current Title") {
            setText("Changed Title");
        } else {
            setText("Current Title");
        }
    };

    return (
        <React.Fragment>
            <h2>Changing Text</h2>
            <h3>
                {text}
            </h3>
            <p>Click the button below to change the Title</p>
            <button onClick={handleClick} className="btn">Click Here!</button>
        </React.Fragment>
    );
};

export default ChangeTitle;
